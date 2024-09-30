import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {CircularProgress} from "@nextui-org/progress";

const Attandacnecard = ({attendancePercentage,title}:{attendancePercentage:number, title: string}) => {
  return (
  <div className='w-full'>
  <Card>
   <div className="flex p-4 w-full justify-between ">
    
     <div>
     <CircularProgress
     classNames={{
       svg: "w-24 h-24 drop-shadow-md",
       indicator: "stroke-[#1890FF]",
       track: "stroke-[#1890FF]/10",
       value: "text-xl  text-black",
     }}
     value={attendancePercentage}
     strokeWidth={2}
     showValueLabel={true}
   />
     </div>
     <div >
       <div className='font-medium text-xl'>Attendance</div>
       <div className='text-xl text-[#1890FF]'>{title}</div>
     </div>
   </div>

 </Card>  </div>
  )
}

export default Attandacnecard