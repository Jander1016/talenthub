import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch('http://localhost:3001/talents');
  const talents = await response.json();
  return NextResponse.json(talents);
}





// interface ResponseData {
//  data: any; 
// }
// interface Params {
//  id: string;
// }

// export const GET = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {

//   const talent_id = params.id;
//   try {
//      const result = await fetch(`${process.env.API_URL}/${talent_id}`, {
//        method: "GET",
//        headers: {
//          "Content-type": "application/json",
//        },
//      });
//      if (!result.ok) {
//        throw new Error(`HTTP error! status: ${result.status}`);
//      }
//      const talent = await result.json();
//      return NextResponse.json<ResponseData>({ data: talent });
//   } catch (error) {
//      console.error("Fetch error:", error);
    
//      return NextResponse.json({ error: "An error occurred" });
//   }
//  };
 

// export const DELETE = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {
//  const id = params.id;
//  const result = await fetch(`${process.env.API_URL}/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json",
//     },
//  });
//  const talent = await result.json();
//  return NextResponse.json<ResponseData>({ data: `Talent ${id} removed` });
// };

// export const PUT = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {
//  const id = params.id;
//  const talent = await request.json();
//  const result = await fetch(`${process.env.API_URL}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(talent),
//  });
//  const talentUpdate = await result.json();
//  return NextResponse.json<ResponseData>({ data: talent });
// };
