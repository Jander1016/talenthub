
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Buttons from './Buttons';


interface Talent {
    id: string;
    name_talent: string;
    nro_identification: string;
    password: string;
    avatar: string;
    email: string;
    location: string;
    personal_page: string,
    is_active: boolean;
    name_service: string;
    talent_description: string;
    name_stack: string;
}

interface RouteParams {
    id: string;
   }

async function loadTalent(Id: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/${Id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching talent:', error);
    return null;
  }
}

function TalentPage({ params }: { params: RouteParams }) {
  const [talent, setTalent] = useState<Talent | null>(null);

  useEffect(() => {
    const fetchTalent = async () => {
      const talentData = await loadTalent(params.id);
      setTalent(talentData);
    };
    fetchTalent();
  }, [params.id]);

  return (
    <section className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <div className="flex w-4/6 justify-center">
        {talent ? (
          <>
            <div className="p-6 w-1/3">
              <h3>Name: {talent.name_talent}</h3>
              <p>Service: {talent.name_service}</p>
              <p>Description: {talent.talent_description}</p>
              <Buttons talentId={talent.id} />
            </div>
            <img 
                src={talent.avatar} 
                className="w-1/3" 
                alt="" />
            </>
        ) : (
          <p>Loading talent...</p>
        )}
      </div>
    </section>
  );
}

export default TalentPage;
