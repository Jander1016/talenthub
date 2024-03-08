"use client";

import Link from 'next/link';
import Image from 'next/image';
import { TalentDetails } from '@/types/talents.details';
import HeartToggle from '../Common/heartToggle';


interface Props {
  talent: TalentDetails;
}

const CardDetails: React.FC<Props> = ({ talent }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <Image
          src={talent?.avatar} 
          alt={talent?.name_talent} 
          width={300}
          height={200}
          className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:w-48 sm:rounded-none sm:rounded-s-lg"
        />
      </div>

      <div className="flex flex-col justify-between p-4 leading-normal text-center">
        <HeartToggle />
        <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{talent?.name_talent}</h5>
        <p className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{talent?.name_service}</p>
        <p className="mb-2 text-md font-bold text-gray-500 dark:text-gray-400">{talent?.location}</p>
      </div>

      <div>
        <p className="mb-3 text-md lg:text-xl text-blue-700 dark:text-gray-400 text-center">{talent?.description}</p>
        <Link href={`./details`}>
          <div className="flex justify-end">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver más</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
