import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import Link from 'next/link'
import { dateformate } from '@/components/dateformate'

export default async function NoticesPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: notices, error } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching notices:', error)
    return <div>Error loading notices</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Notices</h1>
        <Link href="/dashboard/notices/create">
          <Button variant={"default" } size={"sm"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Create Notice</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <Card key={notice.id}>
            <CardContent>
            <span className="text-xs text-[#1890FF]">
              {dateformate(new Date(notice.created_at))}

              </span>
            
             </CardContent>
            <CardHeader>
              <CardTitle>

                
                {notice.title}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-between">
             
            <p className="text-sm text-gray-600">{notice.content}</p>
           
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}