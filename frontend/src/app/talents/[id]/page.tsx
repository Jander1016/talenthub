"use client";

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import Buttons from './Buttons';
import useFetchApi from '@/components/Services/useFetchApi';
import HeartToggle from '@/components/Common/heartToggle';
import Link from 'next/link';

const TalentPage: React.FC = () => {
  const { id } = useParams(); // Obtiene el parámetro de la URL usando useParams

  const { data, error } = useFetchApi('http://localhost:3001/talents/' + id);
  
  useEffect(() => {
      if (error) {
          console.error('Error fetching talent:', error);
      }
  }, [error]);

  if (error || !data) {
      return <div>Error: {error?.message || 'No se encontraron datos'}</div>;
  }
    return (
        <section className="flex justify-center items-center h-[calc(100vh-10rem)]">
            <div className="bg-color-blue flex w-4/6 justify-center">
                <div  className="p-6 w-1/3">
                <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-2">
                      <div>
                        {/* <Image 
                          src={data.avatar} 
                          alt={data.name_talent}
                          width={300}
                          height={200}
                          className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:w-48 sm:rounded-none sm:rounded-s-lg"
                        /> */}
                      </div>
                      <div className="flex flex-col justify-between p-4 leading-normal text-center">
                        <HeartToggle  />
                        <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name_talent}</h5>
                        <p className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{data.name_service}</p>
                        <p className="mb-2 text-md font-bold text-gray-500 dark:text-gray-400">{data.location}</p>
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-md lg:text-xl text-blue-700 dark:text-gray-400 text-center">{data.talent_description}</p>
                      <Link href={`/talents/${data.id}`}>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Ver más
                        </button>
                      </Link>       
                    </div>
                    {/* <Buttons talentId={data.id} /> */}
                </div>
            </div>
        </section>
    );
}

export default TalentPage;
