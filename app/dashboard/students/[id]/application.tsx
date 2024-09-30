import React from 'react'

import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import {dateformate} from '@/components/dateformate'
import { Clock, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'


const Application = async({id}:{id:string}) => {
    const supabase = createServerComponentClient({ cookies })
    const { data: applications, error } = await supabase.from('application').select(`
        *,
        profile:profiles(full_name,avatar_url)
    `).eq('created_by', id)
    .order('updated_at', { ascending: false })
  
    if (error) {
      console.error('Error fetching students:', error)
      return <div>Error loading students</div>
    }


    return (
        <>

      <h1 className="text-xl font-medium text-gray-800 mb-6">Applications</h1>

      <div className='w-full '>
       {applications.map((application) => (
        <div key={application.id}  className=' my-2'>
          <Link href={`/dashboard/applications/${application.id}`}>
        
<Card >
        <div className="md:flex-row flex flex-col items-center  justify-between  p-4">
          <div className="md:flex-row flex flex-col space-y-3 md:space-y-0 items-center  align-middle justify-between ">
            <img
              className="md:h-8 md:w-8 h-12 w-12 rounded-xl md:mr-4"
              src={
                application.profile.avatar_url 
              }
              alt={`${application.profile.full_name}'s avatar`}
            />
           
              <h2 className="text-xl font-medium text-gray-800">
                {application.profile.full_name}
              </h2>
             
          </div>

          <h2 className="text-xl font-medium text-gray-800">
                {application.title}
              </h2>
              <div>{application.status === 'pending' ? (
        <span className="flex items-center text-red-500">
          <Clock className="w-4 h-4 mr-1" />
          Pending
        </span>
      ) : (
        <span className="flex items-center text-green-500">
          <CheckCircle className="w-4 h-4 mr-1" />
          Done
        </span>
      )}</div>
          </div>
        </Card>  </Link>
          <div className=' text-sm text-[#1890FF] flex mr-2   justify-end items-end'>
           <span>

              {  dateformate(application.updated_at)}
           </span>
           
          </div>

        </div>
        
       ))}




      </div>


      </>
  )
}

export default Application