
import React from 'react'
import axios from 'axios'
import Buttons from './Buttons';

async function LoadTalent(talentId) {
 const { data } = await axios.get('http://localhost:3000/api/talents/' + talentId);
 return data;
};


async function TalentPage({params}) {

   const talent = await LoadProduct(params.id) 
   console.log(talent)

   return (
    <section className="flex justify-center items-center h-[calc(100vh-10rem)]>
        
    <div className="flex w-4/6 justify-center ">

            <div className="p-6 w-1/3">
                <h3>
                    Name: {talent.name}
                </h3>
                <><p>
                        Service: {talent.service}
                    </p><p>
                            Description: {talent.stack}
                        </p><Buttons talentId={talent.Id} /></>
            </div>
            <img src={talent.avatar} className="w-1/3" alt="" />

    </section>
  )
}

export default TalentPage