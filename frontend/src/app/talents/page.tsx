import TalentCard from '@/components/Cards/TalentCard';
import axios from 'axios'

async function LoadTalents() { // esta función ejecuta en el backend por lo tanto para axios hay que colocar la ruta
//  const result = await pool.query('SELECT * FROM talents') // para mysql

const {talents}= await axios.get('http://localhost:3000/api/talents') // talents = data si asi aparece en la api
 console.log(talents)
}


async function TalentsPage() {
    const talents = await LoadTalents();
    

    return (
        <div className="grid gap-4 grid-cols-4"> TalentsPage
        {talents.map(talent => (
            
                <TalentCard talent = {talent} key = {talent.id}/>
           
            ) )}

        </div> 
    )     
}
export default TalentsPage