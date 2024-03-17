"use client";
import TalentCard from '@/components/Cards/TalentCard';
import Search from '@/components/Search/index';
import useFetchApi from '@/components/Services/useFetchApi';



const TalentsPage: React.FC = () => {

    const {data: talent} = useFetchApi('http://localhost:3001/talents/')

    
   
    return (
  
    <>
        <section className="py-26 md:py-14 lg:py-14 text-black">
            <div className="container text-4xl text-center p-10 mt-5">
                <h1>Nuestros Talentos</h1>
                              
            </div>
            {/* <div>
                <Search placeholder={''} />
            </div> */}
            <div>
                <TalentCard talent ={talent}/>
            </div>
        </section>
        
        
    </>
    );
   };
   
   export default TalentsPage;