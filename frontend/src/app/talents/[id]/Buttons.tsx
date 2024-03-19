"use client";
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

function Buttons(Id) {

    const router = useRouter() // para que navegue a la página de talents después de eliminar
  return (
    <div className='flex gap-x-2 mt-2 justify-center'>
            <button className='text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded'
            onClick={async () => {
                if (confirm('Está seguro de eliminar a este talento?')) {
                    const response = await axios.delete('/talents/' + Id)
                    if (response.status === 204) {
                        router.push('/talents')
                        router.refresh() // actualiza la página refrescandola para eliminar el producto
                    }
                }
            }}
            >
                Delete
            </button>
            <button className= "text-white bg-grey-500 hover:bg-grey-700 py-2 px-3 rounded"
            onClick={() => {
                router.push(`/talents/edit/${Id}`);
                }}
            >
                Editar
            </button>
        </div>
  )
}

export default Buttons