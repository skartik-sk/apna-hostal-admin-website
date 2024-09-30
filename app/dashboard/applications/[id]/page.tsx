'use client';
import React from "react";
import { useRouter } from 'next/navigation'
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button'
import { Clock, CheckCircle } from "lucide-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { dateformate } from "@/components/dateformate";
const details = async ({ params }: { params: { id: string } }) => {
  const supabase = createClientComponentClient();
  const router = useRouter()
  const handleSubmit = async () => {

    const { data, error } = await supabase
      .from('application')
      .update({ status: 'approved' })
      .eq('id', params.id);

    if (error) {
      console.error('Error creating notice:', error)
    } else {
      router.push('/dashboard/applications')
      router.refresh()
    }
  }
  const { data: application, error: applicationError } = await supabase
    .from("application")
    .select("*,profile:profiles(full_name,avatar_url,enrollment)")
    .eq("id", params.id)
    .single();

    if (applicationError) {
        console.error("Error fetching students:", applicationError);
        return <div>Error loading students</div>;
        }

  return (
    <>
      <div key={application.id} className=" my-2">
        <Card>
          <div className="md:flex-row flex flex-col items-center  justify-between  p-4">
            <div className="md:flex-row flex flex-col space-y-3 md:space-y-0 items-center  align-middle justify-between ">
              <img
                className=" h-14 w-14 rounded-xl md:mr-4"
                src={application.profile.avatar_url}
                alt={`${application.profile.full_name}'s avatar`}
              />
              <div>
                <h2 className="text-xl font-medium text-gray-800">
                  {application.profile.full_name}
                </h2>
                <h2 className="text-xl font-medium text-[#1890FF]">
                  {application.profile.enrollment}
                </h2>
              </div>
            </div>
            <div>
              {application.status === "pending" ? (
                <span className="flex items-center text-red-500">
                  <Clock className="w-4 h-4 mr-1" />
                  Pending
                </span>
              ) : (
                <span className="flex items-center text-green-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Done
                </span>
              )}
            </div>

            
          </div>
          <table className="min-w-full leading-normal my-3 p-4">
          <thead>
            <tr>
             
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Start date
              </th>
            
            </tr>
          </thead>
          <tbody>
           
              <tr key={application.id}>
                
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap"> {
                  (  Date.parse(application.end_date) - Date.parse(application.start_date))/86400000 + ' days'
                    }</p>
                </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {  dateformate(application.start_date)}</p>
                </td>
               
              </tr>
      
          </tbody>
        </table>
          <div className="p-3 flex flex-col space-y-3">
            <div className="text-xl font-semibold text-gray-800">
              {application.title}
            </div>
            <div className=" text-gray-800">
              {application.content}
            </div>
<div className="w-fit">
         <Button onClick={handleSubmit} variant={'approve'}  >
              Approve
         </Button>
</div>

          </div>
        </Card>
        <div className=" text-sm text-[#1890FF] flex mr-2   justify-end items-end">
          <span>{dateformate(application.updated_at)}</span>
        </div>
      </div>
    </>
  );
};

export default details;
