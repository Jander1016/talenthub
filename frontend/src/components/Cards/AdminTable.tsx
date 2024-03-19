import React from 'react';
import Link from 'next/link';
import { FaRegEdit, FaSearchPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

interface Talent {
  map(arg0: (data: any) => React.JSX.Element): React.ReactNode;
  id: string;
  name_talent: string;
  nro_identification: string;
  avatar: string;
  personal_page: string;
  location: string;
  name_service: string;
  talent_description: string;
}

function AdminTable({ talent }: { talent: Talent[] }) {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-12 py-3">
              Acciones
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
            Nombre del talento
            </th>
            <th scope="col" className="px-6 py-3">
              Tiempo de suscripción
            </th>
            <th scope="col" className="px-6 py-3">
              Inicio de suscripción
            </th>
            <th scope="col" className="px-6 py-3">
              Activo
            </th>
           
          </tr>
        </thead>
        <tbody>
          {talent && talent.map((data: any) => (
            <tr key={data.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="grid grid-cols-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Link href={`/talents/${data.id}`}>
                      <FaSearchPlus className="w-7 h-7"/>
                    </Link>
                    <Link href={`/talents/edit/${data.id}`}>
                      <FaRegEdit className="w-7 h-7"/>
                    </Link>
                    <Link href={`/talents/edit/${data.id}`}>
                      <RiDeleteBin5Line  className="w-7 h-7"/>
                    </Link>
                
              </th>
              <td className="px-6 py-4 text-sm ">
                {data.id}
              </td>
              <td className="px-6 py-4 text-sm ">
                {data.name_talent}
              </td>
              <td className="px-6 py-4 text-xl ">
                
              </td>
              <td className="px-6 py-4 text-xl ">
              {data.is_active}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
