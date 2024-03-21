"use client"

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import axios from 'axios'

interface Talent {
    talent_id: string;
    name_talent: string;
    name_service: string;
    talent_description: string;
    nro_identification: string;
    phone_number: string;
    password: string;
    avatar: File | null;
    email: string;
    location: string;
    personal_page: string;
    name_stack: string;
}

function CreateTalentCard() {

    const [talent, setTalent] = useState<Talent>({
        talent_id:"",
        name_talent: "",
        name_service: "",
        talent_description: "",
        nro_identification: "",
        phone_number: "",
        password: "",
        avatar: null,
        email: "",
        location: "",
        personal_page: "",
        name_stack: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const form = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const params = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTalent(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFile(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name_talent', talent.name_talent);
            formData.append('name_service', talent.name_service);
            formData.append('talent_description', talent.talent_description);
            formData.append('nro_identification', talent.nro_identification);
            formData.append('phone_number', talent.phone_number);
            formData.append('password', talent.password);
            formData.append('avatar', talent.avatar as Blob);
            formData.append('email', talent.email);
            formData.append('location', talent.location);
            formData.append('personal_page', talent.personal_page);
            formData.append('name_stack', talent.name_stack);
    
            if (file) {
                formData.append('avatar', file);
            }
    
            const response = await axios.post('http://localhost:3100/api/v1/talents', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('create talent',response);
    
            form.current?.reset();
            router.refresh();
            router.push('/talents');
        };

  return (
    <section className="w-full flex justify-center items-center mt-[10rem] ">
            
    <div className="border-4 border-gray-400 rounded p-6 py-26 md:py-14 lg:py-14 text-center">
            <p className="text-2xl font-semibold sm:text-md ">Formulario Talento</p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-1">
        <form
            onSubmit={handleSubmit}
            ref={form}>
            <div className="grid mt-10 gap-6 mb-6 md:grid-cols-2 ">  
                <div>
                    <label htmlFor="name_talent" className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Nombres y Apellidos</label>
                    <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="John Doe"
                    onChange={handleChange}
                    value={talent.name_talent}
                    name="name_talent" 
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="john.doe@company.com" 
                    onChange={handleChange}
                    value={talent.email}
                    name="email" 
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">DNI / NIE</label>
                    <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="X46789...." 
                    onChange={handleChange}
                    value={talent.nro_identification}
                    name="nro_identification"
                    required />
                </div> 
                <div>
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Número de contacto </label>
                    <input 
                    type="tel" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="+34 123-45-678" 
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    onChange={handleChange}
                    value={talent.phone_number}
                    name="nro_identification" 
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Ubicación</label>
                    <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Madrid - España"
                    onChange={handleChange}
                    value={talent.location}
                    name="location" 
                    required />
                </div> 
                <div>
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Página Personal</label>
                    <input type="url" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="http ...."
                    onChange={handleChange}
                    value={talent.personal_page}
                    name="personal_page"
                    required />
                </div>
                
                <div className="mb-2">
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Contraseña</label>
                    <input 
                    type="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="•••••••••"
                    onChange={handleChange}
                    value={talent.password}
                    name="password"
                    required />
                </div> 
                <div className="mb-2">
                    <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Confirmar contraseña</label>
                    <input 
                    type="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="•••••••••" 
                    onChange={handleChange}
                    value={talent.password}
                    name="password"
                    required />
                </div> 


                
            </div>
            <div className="mb-6">
                    <label htmlFor="file_input" className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Imagen / Avatar</label>
                    <input 
                        id="file_input" 
                        type="file" 
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
            </div>
            <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium sm:text-md text-gray-900 dark:text-white">Descripción</label>
                    <textarea 
                        id="message" 
                        rows={3} 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Apasionado(a) por el front end..."
                        onChange={handleChange}
                        value={talent.talent_description}
                        name="talent_description">
                    </textarea>

                </div>
            <div className="mb-6">
                <label className="block mb-2 text-md font-semibold sm:text-md text-gray-900 dark:text-white">Stack</label>
                <textarea 
                    id="message" 
                    rows={3} 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Javascript , / MySQL , / Angular , /"
                    onChange={handleChange}
                    value={talent.name_stack}
                    name="name_stack"
                    ></textarea>
            </div> 
            
            <div className="grid grid-col-3 mb-4">
                        
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Tipo de suscripción</h3>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input 
                                    type="radio" 
                                    value="" 
                                    name="list-radio" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gratis- 7 dias</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input 
                                    type="radio" 
                                    value="" 
                                    name="list-radio" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">6 meses-20€</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input 
                                    id="horizontal-list-radio-military" 
                                    type="radio" 
                                    value="" 
                                    name="list-radio" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">12 meses -35€</label>
                                </div>
                            </li>
                            
                        </ul>
        
            </div>
                    
            <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input 
                            id="remember" 
                            type="checkbox" 
                            value="" 
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">los términos y condiciones</a>.</label>
            </div >
            <div className="flex justify-center">
                        <button 
                        type="submit" 
                        className="flex justify-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar Subscripción
                        </button>
            </div>
            
                      
        </form>
            

                <Link href={`/talents/${talent.talent_id}`}>
                    <button 
                        type="submit"
                        className="flex justify-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {/* {params.id ? "Actualizar" : "Crear Talento"} */}
                        Crear Talento
                    </button>
                </Link>           
        </div>
    </div>
</section>   
  )
}

export default CreateTalentCard