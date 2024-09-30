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
      .from('report')
      .update({ status: 'approved' })
      .eq('id', params.id);

    if (error) {
      console.error('Error creating notice:', error)
    } else {
      router.push('/dashboard/complaints')
      router.refresh()
    }
  }
  const { data: application, error: applicationError } = await supabase
    .from("report")
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
         
          <div className="p-3 flex flex-col space-y-3">
            <div className="text-xl font-semibold text-gray-800">
              {application.title}
            </div>
            <div className="flex align-middle items-center justify-center">

            <img
                className=" h-48 w-fit rounded-xl md:mr-4"
                src={application.profile.avatar_url}
                alt={`${application.profile.full_name}'s avatar`}
              />
            </div>
            <div className=" text-gray-800">
              {application.content}
            </div>
<div className="w-fit">


         <Button  onClick={handleSubmit}variant={'approve'} >
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
