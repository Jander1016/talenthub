import { NextResponse } from "next/server";

interface ResponseData {
 data: any; 
}
interface Params {
 id: string;
}

export const GET = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {
 const id = params.id;
 const result = await fetch(`${process.env.API_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
 });
 const talent = await result.json();
 return NextResponse.json<ResponseData>({ data: talent });
};

export const DELETE = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {
 const id = params.id;
 const result = await fetch(`${process.env.API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
 });
 const talent = await result.json();
 return NextResponse.json<ResponseData>({ data: `Talent ${id} removed` });
};

export const PUT = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {
 const id = params.id;
 const talent = await request.json();
 const result = await fetch(`${process.env.API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(talent),
 });
 const talentUpdate = await result.json();
 return NextResponse.json<ResponseData>({ data: talent });
};
