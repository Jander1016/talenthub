"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Buttons from './Buttons';
import HeartToggle from '@/components/Common/heartToggle';
import Link from 'next/link';
import { Talent } from '@/types/talents';
// import {useFetchApi} from '@/components/Services/useFetchApi';

const TalentPage: React.FC  =  async() => {
    const { talent_id } = useParams()
  
    const uri = `http://localhost:3100/api/v1/talents/${talent_id}`
    console.log(uri);

    // const {data, isLoading, error} = useFetchApi<Talent>(uri);
    // console.log(data);

    const result= await fetch(uri);
    const data = await result.json();

    console.log(data); 
  
    if (!data) {
        return <div>Error: {'No se encontraron datos'}</div>;
    }
    return (
        <section className="w-full flex justify-center items-center mt-[8rem] ">
            {/* {isLoading && <p>Loading...</p>}
            {error && <div>Error</div>} */}
            <div className="border-4 border-gray-700 rounded p-6 py-26 md:py-14 lg:py-14">
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
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
                        <HeartToggle />
                        <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name_talent}</h5>
                        {/* <p className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{data.name_service}</p> */}
                        <p className="mb-2 text-md font-bold text-gray-500 dark:text-gray-400">{data.location}</p>
                    </div>
                </div>
                <div>
                    <p className="mb-3 text-md lg:text-xl font-bold text-gray-400 dark:text-gray-400 mt-3"> Página Personal : </p>
                    <p className="mb-3 text-md lg:text-xl font-bold text-blue-700 dark:text-gray-400 text-center">{data.personal_page}</p>
                    <p className="mb-3 text-md lg:text-xl font-bold text-gray-400 dark:text-gray-400 "> Stack que maneja: </p>
                    {/* <p className="mb-3 text-md lg:text-xl font-bold text-blue-700 dark:text-gray-400 text-center">{data.name_stack}</p> */}
                    <p className="mb-3 text-md lg:text-xl font-bold text-gray-400 dark:text-gray-400 "> Descripción: : </p>
                    <p className="mb-3 text-md lg:text-xl text-blue-700 dark:text-gray-400 text-center">{data.talent_description}</p>
                </div>
                <div className="flex justify-center">
                    <Link href={`/talents/${data.talent_id}`}>
                        <button className="flex items-center mt-3 px-6 py-2 text-xl font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contactar
                        </button>
                    </Link>
                </div>
                <div className="flex justify-end">
                    <Link href={`/talents/edit/${data.talent_id}`}>
                        <button className="flex items-center mt-3 px-6 py-2 text-xl font-normal text-center text-black bg-yellow-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Editar
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default TalentPage;
