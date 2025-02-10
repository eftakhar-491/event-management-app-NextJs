import dbConnect, { collectionName } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (req) => {
  const usersCol = await dbConnect(collectionName.users);
  const body = await req.json();
  console.log(body);
  const user = await usersCol.findOne({ email: body.email });
  if (user) {
    return NextResponse.json({ message: "User already exists" });
  }
  // hash password
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;

  const result = await usersCol.insertOne(body);

  return NextResponse.json(result);
};
