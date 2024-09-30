import React from 'react'

import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import{ Clock, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'


const Marks = async({id}:{id:string}) => {
    const supabase = createServerComponentClient({ cookies })
    const { data: Markss, error } = await supabase.from('marks').select("*").eq('created_by', id)
    
 
    if (error) {
      console.error('Error fetching students:', error)
      return <div>Error loading students</div>
    }


    return (
        <>

      <h1 className="text-xl font-medium text-gray-800 mb-6">Marks</h1>

      <div className='w-full '>
       {Markss.map((Marks) => (
        <div key={Marks.id}  className=' my-2'>
         <table className="min-w-full leading-normal my-3 p-4">
          <thead>
            <tr>
             
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Sub. Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               m1
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               m1
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               m1
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               End
              </th>
            
            </tr>
          </thead>
          <tbody>
           
              <tr key={Marks.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{Marks.sub_name}</p>
                </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  Marks.m1}</p>
                </td> <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  Marks.m2}</p>
                </td> <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  Marks.m3}</p>
                </td> <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  Marks.end_sem}</p>
                </td>
               
              </tr>
      
          </tbody>
        </table>
        </div>
        
       ))}




      </div>


      </>
  )
}

export default Marks