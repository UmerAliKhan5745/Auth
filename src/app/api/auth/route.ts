import mongoose from "mongoose";
import { NextResponse } from "next/server";
  import {mongoDbstr} from '@/utils/config/dbs';
  import {User} from "@/utils/model/user";
// Handles GET requests to /api
export async function GET(request: Request) {
  await mongoose.connect(mongoDbstr)
  console.log(User )
  // const data=await User.find()
  return NextResponse.json({ message: "data" });
}