import { addproducts, getproducts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = (req, res) => {
  console.log("GET");
  try {
    const product = getproducts();
    return NextResponse.json({ message: "OK", product }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 200 });
  }
};

export const POST = async (req, res) => {
  console.log("POST");
  const { title, description } = await req.json();
  // console.log(req.json());
  try {
    const product = {
      id: Number.parseInt(Date.now().toString()),
      title,
      description,
      date: new Date(),
    };
    addproducts(product);
    return NextResponse.json({ message: "OK", product }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 200 });
  }
};

export const DELETE = async () => {};
