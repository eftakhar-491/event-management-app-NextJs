import dbConnect, { collectionName } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const eventsCol = await dbConnect(collectionName.events);
  const result = await eventsCol.insertOne(body);

  return NextResponse.json(result);
};
