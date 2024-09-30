'use client'

import { useState } from 'react'
import { Bell, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here

  }

  return (
    <header className="bg-white shadow-sm p-4 px-8 flex flex-col md:flex-row space-y-3 justify-between items-center">
    <h1 className="text-3xl font-bold text-[#1890FF]">Welcome Admin!</h1>
    <div className="flex items-center space-x-4">
      {/* <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              window.location.href = `/dashboard/search?query=${searchQuery}`
            }
          }}
          className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div> */}
      <img src="https://img.freepik.com/premium-vector/jurist-avatar-icon-flat-illustration-jurist-avatar-vector-icon-web-design_98396-15522.jpg" alt="User" className="w-8 h-8 rounded-full" />
    </div>
  </header>
  )
}