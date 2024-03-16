import { NextResponse } from "next/server";
import {pool} from '@/libs/mysql'
import cloudinary from "@/libs/cloudinary";
import processImage from "@/libs/processImage";
import { unlink } from 'fs/promises';

export async function GET (request, { params}) {
    try {
        const result = await pool.query('SELECT * FROM talents WHERE id = ?' , [params.id]);

        if (result.length === 0) {
            return NextResponse.json (
                {
                    message: "Producto no encontrado",
                },
                {
                    status: 404,
                },
            );
        }

        return NextResponse.json('obteniendo un producto');
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
        {
            status: 500,
        });
    }
}




export async function DELETE (request, { params}) {
try {
    const result = await pool.query('DELETE * FROM talents WHERE id = ?' , [params.id]);
    
    if (result.affectedRows === 0) {
        return NextResponse.json(
            {
                message: "Producto no encontrado",
            },{
                status: 404,
            }
        )
    }
    // return NextResponse.json('eliminando producto') Next tiene problemas con New Response , hay otra alternativa
    return new Response(null, {
        status: 204,
    })
} catch (error) {
    return NextResponse.json({
        message: error.message,
    },
    {
        status: 500,
    });
}

}


export async function PUT (request, { params}) {

    try {
        const data = await request.formData();
        const image = data.get("avatar");
        const updateData = {
            
            name: data.get("name"),
            service: data.get("name_service"),
            description: data.get("description"),
          
    }

        // creamos una variable global
        let secure_url; 

        if (!data.get("name")){
            return NextResponse.json(
                {
                    message: "Name es requerido"
                }, 
                {
                    status: 400,
                }
            );
        }

        if (image) {
            const filePath = await processImage(image);
            const response= await cloudinary.uploader.upload(filePath)
            updateData.image = response.secure_url;
        // luego vamos a database a insertar la URL de la imagen que me devuelve cloudinary
        // para borrar la imagen en public. Porque se conserva en la nube
            if (response) {
            await unlink(filePath);
            } 
        }
        
        

        const result = await pool.query('UPDATE talents SET ? WHERE id = ?' , [
           updateData, params.id]);
        return NextResponse.json({
            ...data,
        });

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                message: "Producto no encontrado",
            },
            {
                status: 404,
            }
            );

        }
        const updatedProduct = await pool.query('SELECT * FROM talents WHERE id = ?' , [params.id]);
        return NextResponse.json(updatedProduct[0]);
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
        {
            status: 500,
        });
    }
   

}


