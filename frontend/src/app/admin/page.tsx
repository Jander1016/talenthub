"use client";
import AdminCard from '@/components/Cards/AdminCard'
import Search from '@/components/Search/index';
import useFetchApi from '@/components/Services/useFetchApi';



const AdminPage: React.FC = () => {

    const {data: talent} = useFetchApi('http://localhost:3001/talents/')

    
   
    return (
        
        <div className="flex justify-center items center bg-white-300 h-full">

            <Search />
            <AdminCard />
                
        </div>
    
        )
    
    
    }
    export default AdminPage