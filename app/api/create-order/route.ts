// app/api/create-order/route.ts
import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await rzp.orders.create({
      amount: Number(process.env.PRODUCT_PRICE_PAISE || 100), // paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: { email: email || "", name: name || "", phone: phone || "" },
    });

    return NextResponse.json({ id: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error("create-order error:", err);
    return new NextResponse("Order creation failed", { status: 500 });
  }
}
