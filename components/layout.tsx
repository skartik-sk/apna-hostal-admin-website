import Link from 'next/link'
import { useState } from 'react'
import { Bell, ChevronDown, Menu, X } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white text-2xl font-semibold">Admin Dashboard</span>
        </div>
        <nav className="mt-5">
          <Link href="/admin/notices" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200">
            <span className="mx-3">Notices</span>
          </Link>
          <Link href="/admin/applications" className="flex items-center px-6 py-2 mt-2 text-gray-700 hover:bg-gray-200">
            <span className="mx-3">Applications</span>
          </Link>
          <Link href="/admin/complaints" className="flex items-center px-6 py-2 mt-2 text-gray-700 hover:bg-gray-200">
            <span className="mx-3">Complaints</span>
          </Link>
          <Link href="/admin/students" className="flex items-center px-6 py-2 mt-2 text-gray-700 hover:bg-gray-200">
            <span className="mx-3">Students</span>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-gray-200">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none lg:hidden">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="flex items-center">
            <button className="flex mx-4 text-gray-600 focus:outline-none">
              <Bell size={24} />
            </button>
            <div className="relative">
              <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none">
                <img
                  className="h-full w-full object-cover"
                  src="/placeholder.svg?height=32&width=32"
                  alt="Your avatar"
                />
              </button>
              <button className="h-full w-full fixed inset-0 cursor-default" onClick={() => {}}></button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}