import { NextResponse } from "next/server";


interface ResponseData {
     data: any; 
    }
    interface Params {
     id: string;
    }

export const GET = async (request: Request, { params }: { params: Params }): Promise<NextResponse> => {

      const talent_id = params.id;
      
      try {
         const result = await fetch(`${process.env.API_URL}/${talent_id}`, {
           
           method: "GET",
           headers: {
             "Content-type": "application/json",
      
           },
           
         });
         console.log("hola");
         if (!result.ok) {
           throw new Error(`HTTP error! status: ${result.status}`);
         }

         const talent = await result.json();
         return NextResponse.json<ResponseData>({ data: talent });
         
      } catch (error) {

         console.error("Fetch error:", error);
        
         return NextResponse.json({ error: "An error occurred" });
      }
     }


     
