import { NextResponse } from "next/server";

const API_URL : string = process.env.API_URL || '';

export const GET = async (request,{params}) => {
    const id = params.id
    const result = await fetch(`${API_URL}/${id}`,{
               
        method: "GET",
        headers: {
            "Content-type" : "application/json"
        }
    })
    const talent = await result.json()
    return NextResponse.json({data: talent})
};

export const DELETE = async (request,{params}) => {
    const id = params.id
    const result = await fetch(`${API_URL}/${id}`,{
               
        method: "DELETE",
        headers: {
            "Content-type" : "application/json"
        }
    })
    const talent = await result.json()
    return NextResponse.json({data: `Talent ${id} removed`})
};

export const PUT = async (request,{params}) => {
    const id = params.id
    const talent = await request.json()
    const result = await fetch(`${API_URL}/${id}`,{
               
        method: "PUT",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(talent)
    })
    const talentUpdate = await result.json()
    return NextResponse.json({data: talent})
}