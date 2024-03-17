"use client";
import React, { useEffect, useState } from 'react';
import TalentCard from '@/components/Cards/TalentCard';
import axios from 'axios';
import RootLayout from '../layout';
import useFetch from '@/components/Services/useFetch';

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

const TalentsPage: React.FC = () => {

    const {data: talent} = useFetch('http://localhost:3001/talents/')

   
    return (
  
    <>
        <section className="py-26 md:py-14 lg:py-14 text-black">
            <div className="container text-4xl text-center p-10 mt-5">
                <h1>Nuestros Talentos</h1>

                
            </div>
            <div>
                <TalentCard talent ={talent}/>
            </div>
        </section>
        
        
    </>
    );
   };
   
   export default TalentsPage;