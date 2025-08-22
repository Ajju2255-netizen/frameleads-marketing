"use client";
import { useState } from "react";

declare global { interface Window { Razorpay: any } }

interface BuyButtonProps {
  buttonText?: string;
  buttonClassName?: string;
  showInputs?: boolean;
}

export default function BuyButton({ 
  buttonText = "Buy Now — ₹1,999", 
  buttonClassName = "w-full py-3 rounded bg-emerald-500 text-white",
  showInputs = true 
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
      alert("Please fill in all required fields");
      return;
    }

    await handleCheckout();
  };

  async function handleCheckout() {
    try {
      setLoading(true);

      console.log("Starting checkout process...");
      console.log("Customer details:", customerDetails);

      const res = await fetch("https://frameleads-api.workajsal.workers.dev/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerDetails),
      });
      if (!res.ok) throw new Error("Order creation failed");
      const order = await res.json();

      console.log("Order created:", order);

      // Ensure Razorpay script is loaded
      if (!window.Razorpay) {
        console.log("Loading Razorpay script...");
        await new Promise<void>((resolve, reject) => {
          // Check if script already exists
          const existingScript = document.getElementById("razorpay-script");
          if (existingScript) {
            resolve();
            return;
          }

          const s = document.createElement("script");
          s.id = "razorpay-script";
          s.src = "https://checkout.razorpay.com/v1/checkout.js";
          s.onload = () => {
            console.log("Razorpay script loaded successfully");
            resolve();
          };
          s.onerror = () => {
            console.error("Failed to load Razorpay script");
            reject(new Error("Razorpay script load failed"));
          };
          document.head.appendChild(s);
        });
      }

      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      console.log("Razorpay Key:", razorpayKey);
      console.log("Environment variables:", {
        NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        NODE_ENV: process.env.NODE_ENV
      });

      if (!razorpayKey) {
        throw new Error("Razorpay key not found. Please check environment variables.");
      }

      // Validate the key format
      if (!razorpayKey.startsWith('rzp_')) {
        throw new Error("Invalid Razorpay key format. Key should start with 'rzp_'");
      }

      const options = {
        key: razorpayKey,
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        name: "Frameleads Academy",
        description: "Meta Ads Playbook",
        prefill: { 
          name: customerDetails.name, 
          email: customerDetails.email, 
          contact: customerDetails.phone 
        },
        theme: { color: "#16a34a" },
        handler: function (response: any) {
          console.log("Payment successful:", response);
          // On success, redirect to thank-you page (simple flow)
          // Optionally you can POST response to your server for verification later
          window.location.href = "/academy/thank-you";
        },
        modal: {
          ondismiss: function() {
            console.log("Modal dismissed");
            setLoading(false);
          }
        },
        method: { upi: true, card: true, netbanking: true, wallet: true, emi: true, paylater: true }
      };

      console.log("Opening Razorpay checkout with options:", options);

      // Wait a bit for the script to fully initialize
      await new Promise(resolve => setTimeout(resolve, 100));

      if (typeof window.Razorpay === 'undefined') {
        throw new Error("Razorpay not loaded properly");
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.error("Checkout error:", e);
      alert("Could not start checkout. Check console.");
    } finally {
      setLoading(false);
    }
  }

  if (showForm && showInputs) {
    return (
      <div className="space-y-4">
        <form onSubmit={handleFormSubmit} className="space-y-3">
          <input 
            type="text"
            placeholder="Your name *" 
            value={customerDetails.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
          <input 
            type="email"
            placeholder="Email address *" 
            value={customerDetails.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
          <input 
            type="tel"
            placeholder="Phone number *" 
            value={customerDetails.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : buttonText}
          </button>
        </form>
        <p className="text-xs text-gray-500 text-center">UPI · Cards · Netbanking · EMI/Pay Later</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button 
        onClick={() => setShowForm(true)} 
        className={buttonClassName}
        type="button"
      >
        {buttonText}
      </button>
      {showInputs && (
        <p className="text-xs text-gray-500 text-center">UPI · Cards · Netbanking · EMI/Pay Later</p>
      )}
    </div>
  );
}
