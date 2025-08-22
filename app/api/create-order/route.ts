// app/api/create-order/route.ts
import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    // Check if environment variables are set
    if (!process.env.RAZORPAY_KEY_ID) {
      console.error("RAZORPAY_KEY_ID is missing");
      return new NextResponse("Razorpay key ID not configured", { status: 500 });
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("RAZORPAY_KEY_SECRET is missing");
      return new NextResponse("Razorpay key secret not configured", { status: 500 });
    }

    // Log key lengths for debugging (don't log actual keys)
    console.log("Key ID length:", process.env.RAZORPAY_KEY_ID.length);
    console.log("Key Secret length:", process.env.RAZORPAY_KEY_SECRET.length);

    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await rzp.orders.create({
      amount: Number(process.env.PRODUCT_PRICE_PAISE || 199900), // paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: { email: email || "", name: name || "", phone: phone || "" },
    });

    console.log("Order created successfully:", { id: order.id, amount: order.amount });
    return NextResponse.json({ id: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error("create-order error:", err);
    
    // Provide more specific error messages
    if (err instanceof Error) {
      if (err.message.includes("authentication")) {
        return new NextResponse("Razorpay authentication failed - check your API keys", { status: 500 });
      }
      if (err.message.includes("amount")) {
        return new NextResponse("Invalid amount specified", { status: 500 });
      }
    }
    
    return new NextResponse(`Order creation failed: ${err instanceof Error ? err.message : 'Unknown error'}`, { status: 500 });
  }
}
