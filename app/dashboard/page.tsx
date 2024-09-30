'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, FileText, AlertCircle, DollarSign } from 'lucide-react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
export default async function DashboardPage () {
  const supabase = createClientComponentClient();
  const { data: students, error: studentsError } = await supabase.from("profiles").select("*");
  const { data: applications, error: applicationsError } = await supabase.from('application').select().eq('status', 'pending')
  const { data: complaints, error: complaintsError } = await supabase.from('report').select().eq('status', 'pending')
  const { data: Fine, error: FineError } = await supabase.from('fine').select().eq('status', 'pending')
  const { data: attendance, error: attendanceError } = await supabase.from('attendance').select('*');
  const { data: messattendance, error: messattendanceError } = await supabase.from('mess_attendance').select('*');



  if (studentsError || applicationsError || complaintsError || FineError || attendanceError || messattendanceError) {
    console.error('Error fetching data:', studentsError, applicationsError, complaintsError, FineError, attendanceError, messattendanceError)
    return <div>Error loading data</div>
  }
  let studentInMonth =0;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  studentInMonth = (students ?? []).filter((student: any) => {
    const updatedAt = new Date(student.updated_at);
    return updatedAt.getMonth() === currentMonth && updatedAt.getFullYear() === currentYear;
  }).length;

  let applicationInMonth =0;
  applicationInMonth = (applications ?? []).filter((application: any) => {
    const updatedAt = new Date(application.updated_at);
    return updatedAt.getMonth() === currentMonth && updatedAt.getFullYear() === currentYear;
  }).length;
   
  let complaintsInMonth =0;
  complaintsInMonth = (complaints ?? []).filter((complaint: any) => {
    const updatedAt = new Date(complaint.updated_at);
    return updatedAt.getMonth() === currentMonth && updatedAt.getFullYear() === currentYear;
  }).length;
let TotalFine =0;
(Fine ?? []).forEach((Fine: any) => {
  TotalFine = TotalFine + Fine.amount;
});
let FineInMonth =0;
 (Fine ?? []).filter((Fine: any) => {
    const updatedAt = new Date(Fine.updated_at);
    return updatedAt.getMonth() === currentMonth && updatedAt.getFullYear() === currentYear;
  }).forEach((Fine: any) => {
    FineInMonth =   Fine.amount;
  });
  





//   // Process attendance data

  const attendanceCountByDate = (attendance ?? []).reduce((acc, record) => {
    const dateObj = new Date(record.updated_at);
    if (!isNaN(dateObj.getTime())) { // Check if date is valid
      const date = dateObj.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      acc[date] = (acc[date] || 0) + 1;
    }
    return acc;
  }, );



  const labels = Object.keys(attendanceCountByDate).slice(3);
  

const data = Object.values(attendanceCountByDate).slice(3);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Attendance Count',
        data,
        backgroundColor: '#1890FF',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

const options = {
  
  responsive: true,

  height: 500,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


  const messattendanceCountByDate = (messattendance ?? []).reduce((acc, record) => {
    const dateObj = new Date(record.updated_at);
    if (!isNaN(dateObj.getTime())) { // Check if date is valid
      const date = dateObj.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      if (!acc[date]) {
        acc[date] = { breakfast: 0, lunch: 0, dinner: 0 };
      }
      if (record.breakfast) acc[date].breakfast += 1;
      if (record.lunch) acc[date].lunch += 1;
      if (record.dinner) acc[date].dinner += 1;
    }
    return acc;
  }, );

  const messlabels = Object.keys(messattendanceCountByDate).slice(6);
  const breakfastData = messlabels.map(date => messattendanceCountByDate[date].breakfast);
  const lunchData = messlabels.map(date => messattendanceCountByDate[date].lunch);
  const dinnerData = messlabels.map(date => messattendanceCountByDate[date].dinner);

  const messchartData = {
    labels: messlabels,
    datasets: [
      {
        label: 'Breakfast Attendance',
        data: breakfastData,
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        borderWidth: 1,
      },
      {
        label: 'Lunch Attendance',
        data: lunchData,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
      {
        label: 'Dinner Attendance',
        data: dinnerData,
        backgroundColor: '#FFCE56',
        borderColor: '#FFCE56',
        borderWidth: 1,
      },
    ],
  };

  const messoptions = {
    responsive: true,
    height: 500,
    scales: {
      x: {
        grid: {
          offset: true
      }},
      y: {
        grid: {
          offset: true
      }},
    },
  };








  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-[#1890FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(students ?? []) .length}</div>
            <p className="text-xs text-muted-foreground">+{
studentInMonth
          } from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
            <FileText className="h-4 w-4 text-[#1890FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(applications ?? []) .length}</div>
            <p className="text-xs text-muted-foreground">+{applicationInMonth} new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Complaints</CardTitle>
            <AlertCircle className="h-4 w-4 text-[#1890FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(complaints ?? []) .length}</div>
            <p className="text-xs text-muted-foreground">+{complaintsInMonth} from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fines</CardTitle>
            <DollarSign className="h-4 w-4 text-[#1890FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹ {TotalFine}</div>
            <p className="text-xs text-muted-foreground">+{FineInMonth} from last month</p>
          </CardContent>
        </Card>
      </div>
      <div>

      <h1 className=' text-2xl font-bold mt-10'> Hostal attendance</h1>
      <Bar data={chartData} options={options} /> 
      </div>

      <div>

      
      <h1 className=' text-2xl font-bold mt-10'> Hostal attendance</h1>
      <Bar data={messchartData} options={messoptions} />
      </div>
   
    </div>
  )
}