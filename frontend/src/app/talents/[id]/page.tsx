"use client";
import Image from 'next/image';
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
        <section className=" w-full flex justify-center items-center h-[calc(100vh-18rem)] ">
            <div className='border-4 border-grey-700 rounded p-6'>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-2 ">
                      <div>
                          <Image 
                            src={data.avatar} 
                            alt={data.name_talent}
                            width={500}
                            height={400}
                            className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:w-48 sm:rounded-none sm:rounded-s-lg"
                          />
                      </div>
                      <div className="flex flex-col justify-between p-4 leading-normal text-center">
                        <HeartToggle  />
                        <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name_talent}</h5>
                        <p className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{data.name_service}</p>
                        <p className="mb-2 text-md font-bold text-gray-500 dark:text-gray-400">{data.location}</p>
                      </div>
                  </div>
                  <div>
                      <p className="mb-3 text-md lg:text-xl font-bold text-grey-400 dark:text-gray-400 mt-3"> Página Personal : </p>
                      <p className="mb-3 text-md lg:text-xl font-bold text-blue-700 dark:text-gray-400 text-center">{data.personal_page}</p>
                      <p className="mb-3 text-md lg:text-xl font-bold text-grey-400 dark:text-gray-400 "> Stack que maneja: </p>
                      <p className="mb-3 text-md lg:text-xl font-bold text-blue-700 dark:text-gray-400 text-center">{data.name_stack}</p>
                      <p className="mb-3 text-md lg:text-xl font-bold text-grey-400 dark:text-gray-400 "> Descripción: : </p>
                      <p className="mb-3 text-md lg:text-xl text-blue-700 dark:text-gray-400 text-center">{data.talent_description}</p>
                      
                  </div>
                  <div className='flex justify-end'>
                      <Link href={`/talents/${data.id}`}>
                        <button className="flex items-center mt-3 px-6 py-2 text-xl font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Contactar
                        </button>
                      </Link>  
                  </div>

                    {/* <Buttons talentId={data.id} /> */}
            </div> 
        </section>
    );
}

export default TalentPage;
