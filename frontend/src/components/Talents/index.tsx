import { useState, useEffect } from "react";
import cardTalent from "../Common/services";



interface Talent {
  id: number;
  name: string;
  description: string;
  imageUrl: JSX.Element;
}

const CardTalents: React.FC = () => {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const talentsData: Talent[] = await cardTalent.getTalents();
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
        <a
          key={talent.id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ">
          src={talent.imageUrl}
          alt={talent.name}
            <svg  
            width="238"
            height="531"
            viewBox="0 0 238 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{talent.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{talent.description}</p>
          </div>
        </a>
      ))}
    </>
  );
};

export default CardTalents;
