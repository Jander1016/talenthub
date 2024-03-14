
import { NextResponse } from "next/server";

export async function GET(id) {
    // const id = 2
    console.log(`${process.env.API_URL}/${id}`)
  const response = await fetch(`${process.env.API_URL}/${id}`);
  const talentsjson = await response.json();
  console.log(talentsjson)
  return NextResponse.json(talentsjson);
}
