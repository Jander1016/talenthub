import { NextResponse } from "next/server";

const API_URL : string = process.env.API_URL || '';

export const GET = async () => {

    const result = await fetch(API_URL ,{
        method: "GET",
        headers: {
            "Content-type" : "application/json"
        }
    })
    const talents = await result.json()
    return NextResponse.json({data: talents})
};

export const POST = async (request) => {
    const talent = await request.json()
    console.log(talent);
    const result = await fetch(API_URL,{
        method: "POST", 
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(talent)
    })
    const newTalent = await result.json();
    return NextResponse.json({data: newTalent})
};