import dbConnect, { collectionName } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  console.log(body);
  const eventsCol = await dbConnect(collectionName.events);
  const usersCol = await dbConnect(collectionName.users);
  const userData = await usersCol.findOne({ email: body?.organizerId });
  console.log(userData);
  const result = await eventsCol.insertOne({
    ...body,
    organizeName: userData?.organizeName,
  });

  return NextResponse.json(result);
};
