import { NextResponse } from "next/server";

const API_URL: string = process.env.API_URL || '';

export const GET = async (): Promise<any> => {
    try {
        const result = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        const talents = await result.json();
        return NextResponse.json({ data: talents });
    } catch (error) {
        console.error("Error in GET request:", error);
        throw error;
    }
};

export const POST = async (request: any): Promise<any> => {
    try {
        const talent = await request.json();
        console.log(talent);
        const result = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(talent)
        });
        const newTalent = await result.json();
        return NextResponse.json({ data: newTalent });
    } catch (error) {
        console.error("Error in POST request:", error);
        throw error;
    }
};
