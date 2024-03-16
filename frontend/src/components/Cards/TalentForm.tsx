"use client";
import { useRef, useState, useEffect } from "react"
import axios  from "axios";
import { useRouter, useParams } from 'next/navigation'

function NewTalent () {

    const [talent, setTalent] = useState ({
        name: "",
        name_service: "", 
        description: "",

    });
    // para ver un preview de la imagen
    const [file, setFile] = useState(null);
    // para resetear el formulario
    const Form = useRef(null);
    const router = useRouter()
    const params = useParams()
    

    // para no colocar onChange en cada parte del formulario se hace una función general 
    const handleChange = e => {
        console.log(e.target.value)
        //para guardar la información
        setTalent({
            ...talent,
            [e.target.name]: e.target.value
        })
    }
    //para traer los datos al formulario para modificarlos y se coloca value en los input
    useEffect(() => {
        if (params.id) {
           axios.get('/api/talents/' + params.id)
           .then(response => {
            setTalent({
                name: response.data.name,
                description: response.data.description,
                name_service: response.data.service
            })
           })
        }
    }, [] )

   
    const handleSubmit = async (e) => {
        e.preventDefault(); //para que no reinie la página

        if (!params.id){ //si no hay que actualizar
            //hay que añadir imagenes entonces no se puede enviar un json
            const formData = new FormData()
            formData.append('name', talent.name) // esto es igual al objeto json {talent.name}
            formData.append('service', talent.service)
            formData.append('description', talent.description)
           

            if (file) {
                formData.append('avatar', file)
            }

        const response = await axios.post('/api/talents', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
        console.log(response)
        
        } else {
            // para añadir la imagen
            const formData = new formData();
            formData.append('name', talent.name) // esto es igual al objeto json {talent.name}
            formData.append('service', talent.service)
            formData.append('description', talent.description)

            if (file) {
                formData.append('avatar', file)
            }

            const response = await axios.put('/api/talents', params.id, formData);
            console.log(response);
            
        }

        form.current.reset();
        router.refresh();
        router.push('/talents')
    };
    return (
        <div className="flex">

            <form 
            onSubmit={handleSubmit}
            ref={[form]}>

                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                placeholder="name" 
                onChange={handleChange}
                value={talent.name}
                />
                 {/* preview image */}
                {file && 
                <img 
                className="w-96 object-contain mx-auto my-4"
                src= {URL.createObjectURL(file)} 
                alt="talentImage" 
                />}

                 <label htmlFor="description">Description</label>

                <label htmlFor="name_service">Servicio</label>
                <input 
                type="text" 
                placeholder="servicio" 
                onChange={handleChange}
                value={talent.name_service}
                />

                <label 
                htmlFor="talentImage"
                className="block text-gray-700 text s-m font-bold mb-2"
                >Avatar
                </label>
                <input 
                type="file" 
                className="shadow appearance-none border rounded w-full py-s px-3 mb-2"
                onChange={(e) => {
                    setFile(e.target.files[0])
                }}
                />
                <textarea 
                rows={3} 
                placeholder="Breve descripción..." 
                onChange={handleChange}
                value={talent.description}
                />

                <button className="">
                    {params.id? "Actualizar" : "Crear Talento"}
                </button>

            </form>


        </div>

    )
}

export default NewTalent;