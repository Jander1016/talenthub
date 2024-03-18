"use client"
import { useRef, useState, useEffect } from "react"
import axios from "axios";
import { useRouter, useParams } from 'next/navigation'
import useFetchApi from '@/components/Services/useFetchApi'
import Image from "next/image";

interface Talent {
    name_talent: string;
    name_service: string;
    talent_description: string;
    nro_identification: string;
    password: string;
    avatar: File | null;
    email: string;
    location: string;
    personal_page: string;
    name_stack: string;
}

function NewTalentPage() {
    const [talent, setTalent] = useState<Talent>({
        name_talent: "",
        name_service: "",
        talent_description: "",
        nro_identification: "",
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
        setTalent({
            ...talent,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (params.id) {
            axios.get(`http://localhost:3001/talents/${params.id}`)
                .then(response => {
                    const data = response.data;
                    setTalent({
                        name_talent: data.name_talent,
                        talent_description: data.talent_description,
                        name_service: data.name_service,
                        nro_identification: data.nro_identification,
                        password: data.password,
                        avatar: data.avatar,
                        email: data.email,
                        location: data.location,
                        personal_page: data.personal_page,
                        name_stack: data.name_stack,
                    });
                })
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name_talent', talent.name_talent);
        formData.append('name_service', talent.name_service);
        formData.append('talent_description', talent.talent_description);
        formData.append('nro_identification', talent.nro_identification);
        formData.append('password', talent.password);
        formData.append('avatar', talent.avatar as Blob);
        formData.append('email', talent.email);
        formData.append('location', talent.location);
        formData.append('personal_page', talent.personal_page);
        formData.append('name_stack', talent.name_stack);

        if (file) {
            formData.append('avatar', file);
        }

        const response = await axios.post('http://localhost:3001/talents', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response);

        form.current?.reset();
        router.refresh();
        router.push('/talents');
    };

    return (
        <section className="w-full flex justify-center items-center mt-[8rem] ">
            <div className="border-4 border-gray-700 rounded p-6 py-26 md:py-14 lg:py-14">
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        
                    <form
                        onSubmit={handleSubmit}
                        ref={form}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="name"
                            onChange={handleChange}
                            value={talent.name_talent}
                            name="name_talent"
                        />
                        {file && 
                            <Image
                                className="w-96 object-contain mx-auto my-4"
                                src={URL.createObjectURL(file)}
                                alt="talentImage"
                            />
                        }
                        <label htmlFor="name_service">Servicio</label>
                        <input
                            type="text"
                            placeholder="servicio"
                            onChange={handleChange}
                            value={talent.name_service}
                            name="name_service"
                        />
                        <label htmlFor="talentImage" className="block text-gray-700 text s-m font-bold mb-2">Avatar</label>
                        <input
                            type="file"
                            className="shadow appearance-none border rounded w-full py-s px-3 mb-2"
                            onChange={(e) => {
                                setFile(e.target.files ? e.target.files[0] : null);
                            }}
                        />
                        <textarea
                            rows={3}
                            placeholder="Breve descripción..."
                            onChange={handleChange}
                            value={talent.talent_description}
                            name="talent_description"
                        />
                        <button type="submit">
                            {params.id ? "Actualizar" : "Crear Talento"}
                        </button>
                    </form>
                </div>
            </div>
        </section>   
    )
}

export default NewTalentPage;
