// "use client";
import TalentCard from '@/components/Cards/TalentCard';
import Search from '@/components/Search/index';
// import useFetch from '@/components/Services/useFetchApi';

const TalentsPage: React.FC = async () => {
    const listdata = await fetch('http://localhost:3100/api/v1/talents')
    const talent = await listdata.json()

    return (

        <>
            <section className="py-26 md:py-14 lg:py-14 text-black">
                <div className="container text-4xl text-center p-10 mt-5">
                    <h1>Nuestros Talentos</h1>

                </div>
                <div className='py-26 p-4'>
                    <Search placeholder={''} />
                </div>
                <div className='mt-4'>
                    <TalentCard talent={talent} />
                </div>
            </section>


        </>
    );
};

export default TalentsPage;