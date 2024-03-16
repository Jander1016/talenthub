import React from 'react'
import Link from 'next/link'

function ProductCard({talent}) {
  return (
    <link className="bg-white rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-100 hover: cursor pointer"
        href={`/talents/${talent.id}`}
    > 
                {talent.avatar && 
                <img src={talent.avatar} className="w-full rounded-t-lg" alt=""
                />}
                <div className='p-4'>
                  <h1>{talent.name}</h1>
                  <h1>{talent.location}</h1>
                  <p>{talent.description}</p>
                </div>
    </link>

            ) 

          

}

export default ProductCard