'use client'
import React, { use } from 'react'
import {
    Card,

  } from "@/components/ui/card";
import { Student } from '@/lib/Student';


const Stcard = ({ student }: { student: Student }) => {
  return (
    
    <Card   onClick={
        ()=>{
            window.location.href = `/dashboard/students/${student.id}`;
        }
    } >
     
        <div className="flex items-center  justify-between mb-4">
          <div className="flex items-center ">
            <img
              className="h-16 w-16 rounded-full mr-4"
              src={
                student.avatar_url ||
                "/placeholder.svg?height=64&width=64"
              }
              alt={`${student.full_name}'s avatar`}
            />
            <div>
              <h2 className=" font-medium text-gray-800">
                {student.full_name}
              </h2>
              <p className="text-sm text-[#1890FF]">
                {student.enrollment}
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

  )
}

export default Stcard