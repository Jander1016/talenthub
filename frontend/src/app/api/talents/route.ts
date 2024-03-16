   import { NextResponse } from "next/server";
   import { pool } from '@/libs/mysql';
   import { unlink } from 'fs/promises';
   import cloudinary from "@/libs/cloudinary";
   import processImage from "@/libs/processImage";
   
   
   export async function GET () {
       try {
           const results = await pool.query('SELECT * FROM talents')
           return NextResponse.json(results);
       }
       catch (error) {
           console.log(error);
           return NextResponse.json({
               message: error.message,
           },
           {
               status: 500,
           });
       }
   
   }
   
   export async function POST (request) {
   
       try {
           const data = await request.formData();
           const image = data.get("avatar");
           //condicional para la foto requerida
   
           if (!data.get("name")){
               return NextResponse.json({
                   message:"Nombre es requerido"  
                 }, {
                     status: 400,
                 })
           }
           if(!image) {
               return NextResponse.json({
                 message:"Imagen es requerida"  
               }, {
                   status: 400
               })
           }
          
          const filePath = await processImage(image);
           // servicio de tercero en cloud dinary para subir imagenes
           const response= await cloudinary.uploader.upload(filePath)
           console.log(response)
           // luego vamos a database a insertar la URL de la imagen que me devuelve cloudinary
           // para borrar la imagen en public. Porque se conserva en la nube
          if (response) {
           await unlink(filePath);
          } 
           // conexión a la base de datos para insertar producto
           const result = await pool.query("INSERT INTO  talents SET ?" , {
               name_talent: data.get("name_talent"),
               description: data.get("description"),
               name_service: data.get("name.service") ,
               avatar: response.secure_url,
           });
           return NextResponse.json({
               name_talent: data.get("name_talent"),
               description: data.get("description"),
               name_service: data.get("name.service") ,
               
               id: result.insertId,
           })
   
           } catch (error) {
           console.log(error);
           return NextResponse.json({
               message: error.message,
           },
           {
               status: 500,
           });
       }
   }