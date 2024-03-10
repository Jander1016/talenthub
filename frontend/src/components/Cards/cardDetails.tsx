"use client";
import { useRouter } from "next/router";
import useFetch from "@/components/Services/useFetch";
import SectionTitle from "@/components/Common/SectionTitle";
import HeartToggle from "@/components/Common/heartToggle";
import Image from 'next/image';
import Link from "next/link";

const CardDetails: React.FC = () => {
    const router = useRouter();
    const { talent_id } = router.query;

    const { data, isPending, error } = useFetch(`http://localhost:3000/talents/details/${talent_id}`);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
  
    return (
        <section className="py-26 md:py-14 lg:py-14">
            <div className="container">
                <SectionTitle
                    title="Nuestros Talentos"
                    paragraph="Hemos seleccionado los últimos talentos incorporados a TalentHub:"
                    center
                />
                <div className="grid grid-cols-1 gap-x-48 gap-y-20 md:grid-cols-2 lg:grid-cols-2 p-4 ">
                    {data && (
                        <div key={data.talent_id} className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-700 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark p-4">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-2">
                                <div>
                                    <Image 
                                        src={data.avatar} 
                                        alt={data.name_talent}
                                        width={300}
                                        height={200}
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
                                <p className="mb-3 text-md lg:text-xl text-blue-700 dark:text-gray-400 text-center">{data.talent_description}</p>
                                <Link href={`/talents/details/${data.talent_id}`}>
                                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver más</a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CardDetails;