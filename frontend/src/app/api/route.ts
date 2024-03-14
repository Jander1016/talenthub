import { NextResponse } from "next/server";

export async function fetchAll(talent_id: string) {
  const response = await fetch(`${process.env.API_URL}?talent_id=${talent_id}`);
  const talentsjson = await response.json();
  return NextResponse.json(talentsjson);
}

export async function POST  ( request:Request) {
    const data= await request.json();
    return NextResponse.json ({
       data
    });
   
   }
// interface ResponseData {
//  data: any; 
// }

// export const GET = async (): Promise<NextResponse> => {
//  const result = await fetch(process.env.API_URL!, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//  });
//  const talents = await result.json();
//  return NextResponse.json<ResponseData>({ data: talents });
// };

// //Create
// export const POST = async (request: Request): Promise<NextResponse> => {
//  const talent = await request.json();
//  console.log(talent);
//  const result = await fetch(process.env.API_URL!, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(talent),
//  });
//  const newTalent = await result.json();
//  return NextResponse.json<ResponseData>({ data: newTalent });
// };
