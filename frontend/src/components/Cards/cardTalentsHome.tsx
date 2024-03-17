"use client";
import useFetch from '../Services/useFetchApi';
import SectionTitle from "../Common/SectionTitle";
import TalentCard from './TalentCard';


const CardTalentsHome: React.FC = () => {
  const {data: talent} = useFetch('http://localhost:3001/talents/')
     
  return (
    <section className="py-26 md:py-14 lg:py-14">
      <div className="container">
        <SectionTitle
          title="Nuestros Talentos"
          paragraph="Hemos seleccionado los últimos talentos incorporados a TalentHub:"
          center
        />

        <TalentCard talent ={talent}/>
       
      </div>
    </section>
  );
};

export default CardTalentsHome;
