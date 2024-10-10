'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import {dateformate} from '@/components/dateformate'
import { Clock, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import React from 'react'

export default async function users () {

    const supabase = createClientComponentClient();
  const router = useRouter()
  const handleSubmit = async (ids:string) => {

    const { data, error } = await supabase
      .from('fine')
      .update({ status: 'approved' })
      .eq('id', ids);

    if (error) {
      console.error('Error creating notice:', error)
    } else {
      // router.push('/dashboard/fines')
      router.refresh()
    }
  }
  
    const { data: users, error } = await supabase.from('profiles').select("*").eq('isVerified',false ).order('updated_at', { ascending: false })
  
    if (error) {
      console.error('Error fetching users:', error)
      return <div>Error loading users</div>
    }



    return (
        <>

      <h1 className="text-xl font-medium text-gray-800 mb-6">Verify</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {users.map((user) => (
        <div key={user.id}  className=' my-2'>

<Card   onClick={
        ()=>{
            window.location.href = `/dashboard/verify/${user.id}`;
        }
    } >
     
        <div className="flex items-center  justify-between mb-4">
          <div className="flex items-center ">
            <div>
              <h2 className=" font-medium text-gray-800">
                {user.full_name}
              </h2>
              <p className="text-sm text-[#1890FF]">
                {user.enrollment}
              </p>
            </div>
          </div>
        
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

    </Card>
          <div className=' text-sm text-[#1890FF] flex mr-2   justify-end items-end'>
           <span>

              {  dateformate(user.updated_at)}
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
                user Name
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
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.profile.full_name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                {  dateformate(user.updated_at)}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap"> {
                  (  Date.parse(user.end_date) - Date.parse(user.start_date))/86400000 + ' days'
                    }</p>
                </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  dateformate(user.start_date)}</p>
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