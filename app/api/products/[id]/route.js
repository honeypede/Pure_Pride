import { getProductsById } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = (req, res) => {
  let id = req.url.split("products/")[1];
  id = Number.parseInt(id);
  const product = getProductsById(id);
  return NextResponse.json(product);
};
export const PUT = (req, res) => {
  console.log("PUT");
};

export const DELETE = (req, res) => {
  console.log("DELETE");
};
