
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import {dateformate} from '@/components/dateformate'
import { Clock, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import React from 'react'

export default async function Complaints () {

    const supabase = createServerComponentClient({ cookies })
    const { data: applications, error } = await supabase.from('report').select(`
        *,
        profile:profiles(full_name,avatar_url)
    `).order('updated_at', { ascending: false })
  
    if (error) {
      console.error('Error fetching students:', error)
      return <div>Error loading students</div>
    }


    return (
        <>

      <h1 className="text-xl font-medium text-gray-800 mb-6">Complaints status</h1>

      <div className='w-full '>
       {applications.map((application) => (
        <div key={application.id}  className=' my-2'>
          <Link href={`/dashboard/complaints/${application.id}`}>
        
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


      
      
      {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date Added
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Start date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{application.profile.full_name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                {  dateformate(application.updated_at)}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    application.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {application.status}
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap"> {
                  (  Date.parse(application.end_date) - Date.parse(application.start_date))/86400000 + ' days'
                    }</p>
                </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  dateformate(application.start_date)}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button className="text-[#1890FF] hover:text-blue-900">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      </>
  )
}