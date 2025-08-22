"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

declare global { 
  interface Window { 
    Razorpay: any 
  } 
}

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productPrice?: string;
  productDescription?: string;
}

export default function CheckoutDrawer({
  isOpen,
  onClose,
  productName = "Frameleads Academy – Meta Ads Playbook",
  productPrice = "₹1,999",
  productDescription = "Complete toolkit to run profitable Meta Ads campaigns"
}: CheckoutDrawerProps) {
  const [loading, setLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!customerDetails.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!customerDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(customerDetails.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!customerDetails.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(customerDetails.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPay = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await handleCheckout();
  };

  async function handleCheckout() {
    try {
      setLoading(true);

      console.log("Starting checkout process...");
      console.log("Customer details:", customerDetails);

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerDetails),
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", res.status, errorText);
        throw new Error(`Order creation failed: ${res.status} - ${errorText}`);
      }
      
      const order = await res.json();
      console.log("Order created:", order);

      // Ensure Razorpay script is loaded
      if (!window.Razorpay) {
        console.log("Loading Razorpay script...");
        await new Promise<void>((resolve, reject) => {
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
      console.log("Razorpay Key available:", !!razorpayKey);
      console.log("Razorpay Key length:", razorpayKey?.length);
      
      if (!razorpayKey) {
        throw new Error("Razorpay key not found. Please check NEXT_PUBLIC_RAZORPAY_KEY_ID environment variable.");
      }

      if (!razorpayKey.startsWith('rzp_')) {
        throw new Error("Invalid Razorpay key format. Key should start with 'rzp_'");
      }

      // Check if key is complete (should be around 20-25 characters after 'rzp_')
      if (razorpayKey.length < 20) {
        throw new Error("Razorpay key appears to be incomplete. Please check your API key configuration.");
      }

      // Test the key format
      console.log("Testing Razorpay key format...");
      if (razorpayKey.length !== 23) {
        console.warn("Razorpay key length is unusual. Expected 23 characters, got:", razorpayKey.length);
      }

      const options = {
        key: razorpayKey,
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        name: "Frameleads Academy",
        description: productDescription,
        prefill: { 
          name: customerDetails.name, 
          email: customerDetails.email, 
          contact: customerDetails.phone 
        },
        theme: { color: "#16a34a" },
        handler: function (response: any) {
          console.log("Payment successful:", response);
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

      console.log("Opening Razorpay with options:", options);

      // Wait a bit for the script to fully initialize
      await new Promise(resolve => setTimeout(resolve, 100));

      if (typeof window.Razorpay === 'undefined') {
        throw new Error("Razorpay not loaded properly");
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.error("Checkout error:", e);
      
      // Show a more user-friendly error message
      const errorMessage = e instanceof Error ? e.message : 'Unknown error occurred';
      
      if (errorMessage.includes("authentication") || errorMessage.includes("incomplete")) {
        const shouldContact = confirm(
          "Payment system temporarily unavailable. Would you like to contact us for manual payment processing?"
        );
        if (shouldContact) {
          // Open WhatsApp or email
          const message = `Hi, I'd like to purchase the Meta Ads Playbook for ₹1,999. My details: ${customerDetails.name}, ${customerDetails.email}, ${customerDetails.phone}`;
          const whatsappUrl = `https://wa.me/916362821368?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }
      } else {
        alert(`Checkout Error: ${errorMessage}`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              duration: 0.3 
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Complete your purchase</h2>
                  <p className="text-sm text-gray-500">Secure checkout powered by Razorpay</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Product Summary */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{productName}</h3>
                    <p className="text-sm text-gray-600">{productDescription}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{productPrice}</div>
                    <div className="text-sm text-gray-500 line-through">₹4,999</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto p-6">
                <form onSubmit={handleProceedToPay} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={customerDetails.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`mt-1 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus-visible:ring-emerald-500 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:border-emerald-500 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`mt-1 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus-visible:ring-emerald-500 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:border-emerald-500 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`mt-1 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus-visible:ring-emerald-500 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:border-emerald-500 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Security Features */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium text-green-800">Secure Payment</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Your payment is protected by bank-level security. We never store your card details.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Payment Methods</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['UPI', 'Cards', 'Netbanking', 'EMI/Pay Later'].map((method) => (
                        <div key={method} className="flex items-center space-x-2 p-2 rounded border">
                          <CreditCard className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium text-blue-800">30-Day Guarantee</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          If you don't see results in 30 days, we'll give you a free strategy call.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <Button
                  onClick={handleProceedToPay}
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Proceed to Pay</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  By clicking "Proceed to Pay", you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
