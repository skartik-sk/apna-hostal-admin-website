import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Shortprofile from "./shortprofile";
import Attandacnecard from "../attandacnecard";
import React from "react";
import Application from "./application";
import Complaints from "./complaints";
import Fine from "./fine";
import Marks from "./marks";
export default async function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data: studentProfile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.id)
    .single();

  const currentMonthStart = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).toISOString();
  const currentMonthEnd = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).toISOString();

  const { data: hostalAttendance, error: attendanceError } = await supabase
    .from("attendance")
    .select("*")
    .eq("created_by", params.id)
    .gte("updated_at", currentMonthStart)
    .lte("updated_at", currentMonthEnd);
  const { data: messsAttendance, error: messattendanceError } = await supabase
    .from("mess_attendance")
    .select("*")
    .eq("created_by", params.id)
    .gte("updated_at", currentMonthStart)
    .lte("updated_at", currentMonthEnd);

  if (
    profileError ||

    attendanceError ||
    messattendanceError 
  ) {
    notFound();
  }
  const totalDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  let attendancePercentage :number = 0;
  let messPercentage :number = 0;

  if (hostalAttendance) {
    attendancePercentage = (hostalAttendance.length / totalDaysInMonth) * 100;
  }
  if (messsAttendance) {
    attendancePercentage = (hostalAttendance.length / totalDaysInMonth) * 100;
  }

  return (
    <>
  <Shortprofile student={studentProfile} />  

  <div className="md:flex gap-3 my-4">
<Attandacnecard title="Hostal" attendancePercentage={attendancePercentage} />
<Attandacnecard title="Mess" attendancePercentage={messPercentage} />

  </div>


  <div className="p-5">
    <Marks id={params.id}/>
  </div>
  <div className="p-5">



  <Application id={params.id}/>
  </div>

  <div className="p-5">
    <Complaints id={params.id}/>

  </div>
  <div className="p-5">
    <Fine id={params.id}/>

  </div>



  
  
   
      
  
  


    </>
  );
}
