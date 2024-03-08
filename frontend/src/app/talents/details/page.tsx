"use client";

import useFetchApi from '@/components/Services/useFetchApi';
import CardDetails from '@/components/Cards/cardDetails';
import { usePathname } from "next/navigation";

const DetailsTalent = () => {
  const pathname = usePathname().split('/');
  const id = pathname[0]; 

  const { data } = useFetchApi(`http://localhost:3001/talents/${id}`); 


  return (


    <section className="py-26 md:py-14 lg:py-14">
      <div className="grid grid-cols-1 gap-x-48 gap-y-20 md:grid-cols-2 lg:grid-cols-2 p-4 ">
        <CardDetails talent={data} /> 
      </div>
    </section>
  );
};

export default DetailsTalent;