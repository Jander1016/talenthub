import { NextResponse } from "next/server";


interface ResponseData {
 data: any; 
}

export const GET = async (): Promise<NextResponse> => {
 const result = await fetch(process.env.API_URL!, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
 });
 const talents = await result.json();
 return NextResponse.json<ResponseData>({ data: talents });
};

export const POST = async (request: Request): Promise<NextResponse> => {
 const talent = await request.json();
 console.log(talent);
 const result = await fetch(process.env.API_URL!, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(talent),
 });
 const newTalent = await result.json();
 return NextResponse.json<ResponseData>({ data: newTalent });
};
