"use client";
import { useState, useEffect } from "react";
import cardTalent from "../Common/services";
import { TalentDetails } from "@/types/talents.details";




const CardTalents: React.FC = () => {
  const [talents, setTalents] = useState<TalentDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const talentsData: TalentDetails[] = await cardTalent.getTalents();
        setTalents(talentsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching talents:", error);
      }
    };

    fetchTalents();
  }, []);

  return (
    <>
      {talents.map((talent) => (

      <div className="grid grid-cols-1 gap-x-40 gap-y-40 md:grid-cols-2 lg:grid-cols-2 py-16 md:py-8 lg:py-8 items-center bg-gray border border-gray-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
        key={talent.talent_id} >
        
          <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ">
            {talent.avatar}
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center ">{talent.name_talent} </h5>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white text-center"> 
              {talent.name_service} </p>
            <p className="mb-3 text-xl text-blue-700 dark:text-gray-400">`{talent.description}`</p>
            <p className="mb-2 font-bold text-gray-500 dark:text-gray-400 text-end">Localización: {talent.location}</p>

          </div>
        
      </div>
      ))}
    </>
  );
};

export default CardTalents;
