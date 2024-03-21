"use client";
import AdminTable from '@/components/Cards/AdminTable'
import Search from '@/components/Search/index';
import useFetchApi from '@/components/Services/useFetchApi';


const AdminPage: React.FC = async() => {


    console.log( process.env.API_URL)

    // const {data: talent} = useFetchApi('http://localhost:3100/api/v1/talents') 

    const fetchdata = await fetch(`http://localhost:3100/api/v1/talents`)
    const talent = await fetchdata.json()

    console.log(talent)
    
   
    return (
  
    <> 
        <section className="w-full justify-center mt-12 py-26 md:py-14 lg:py-14 text-black">
            
            <div className='py-26 p-4'>
                <Search placeholder={''} />
            </div>
            <div className='mt-6 flex justify-center'>
                <AdminTable talent ={talent}/>
            </div>
        </section>
        
        
    </>
    );
   };
   
   export default AdminPage;