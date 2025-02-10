import dbConnect, { collectionName } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (req) => {
  const usersCol = await dbConnect(collectionName.users);
  const organizerCol = await dbConnect(collectionName.organizers);
  const body = await req.json();

  const user = await usersCol.findOne({ email: body.email });

  if (user) {
    return NextResponse.json({ message: "User already exists" });
  }
  // hash password
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;
  const userData = {
    email: body?.email,
    userName: body?.userName,
    password: hashedPassword,
    role: body?.role,
  };
  const organizerData = {
    organizeName: body?.organizeName,
    photo: body?.photo,

    category: body?.category,
    description: body?.description,
  };
  if (body?.role === "Organizer") {
    const organizer = await organizerCol.findOne({
      organizeName: body?.organizeName,
    });
    if (organizer) {
      NextResponse.json({ message: "Organizer already exists" });
    } else {
      const result = await usersCol.insertOne(userData);
      const organizerResult = await organizerCol.insertOne({
        ...organizerData,
        userId: result.insertedId,
      });
      return NextResponse.json(result);
    }
  }
};
