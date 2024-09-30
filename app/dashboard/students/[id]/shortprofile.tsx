import { Button } from '@/components/ui/button'
import { Student } from '@/lib/Student'
import Link from 'next/link'
import React from 'react'


const Shortprofile = ({student}:{ student: Student }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
    <div className="flex items-center mb-6 justify-between w-full">
      <img
        className="h-32 w-32 rounded-xl mr-6"
        src={student.avatar_url || '/placeholder.svg?height=128&width=128'}
        alt={`${student.full_name}'s avatar`}
      />
   

<div className='md:flex-row flex flex-col items-end justify-start align- space-y-3 md:space-y-0 md:space-x-4  '>

        <Button variant={'secondary'} className='' >Create Fine</Button>

      <Link href={`/dashboard/students/${student.id}/fines`}>
        <Button>Create Fine</Button>
      </Link>

      </div>
      
    </div>

      <div className=' flex flex-col md:flex-row justify-between w-full'>
        <div className='w-full '>

        <p className='mb-2'><strong className=' font-normal'>Name:</strong> <span className=' text-[#1890FF] font-medium'> {student.full_name}</span></p>
        <p className='mb-2'><strong className=' font-normal'>Enrollment:</strong> <span className=' text-[#1890FF] font-medium'> {student.enrollment}</span></p>
        </div>
        <div className='w-full '>

        <p className='mb-2'><strong className=' font-normal'>Phone:</strong> <span className=' text-[#1890FF] font-medium'> {student.phone}</span></p>
        <p className='mb-2'><strong className=' font-normal'>Email:</strong> <span className=' text-[#1890FF] font-medium'>{student.email}</span></p>
        </div>

      </div>
     
    </div>
  )
}

export default Shortprofile