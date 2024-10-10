"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Users,
  AlertCircle,
  DollarSign,
  LogOut,
  ClipboardList,
  BadgeCheck,
} from "lucide-react";



import Logo from "@/logo";



const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BadgeCheck, label: "Verify", href: "/dashboard/verify" },
  { icon: FileText, label: "Notices", href: "/dashboard/notices" },
  { icon: Users, label: "Students", href: "/dashboard/students" },
  { icon: ClipboardList, label: "Applications", href: "/dashboard/applications" },
  { icon: AlertCircle, label: "Complaints", href: "/dashboard/complaints" },
  { icon: DollarSign, label: "Fines", href: "/dashboard/fines" },
];

export function Sidebar() {
  const pathname = usePathname();


  return (
    <div className="flex flex-col w-fit px-4 bg-[#1890FF] text-white">
      <div className="h-5"></div>
      <div className="flex items-center justify-center h-20 shadow-md">
        <Logo />
        <h4 className="text-xl font-bold md:block hidden">
          <div>
            <div>Apna</div>
            <div>Hostal</div>
          </div>
        </h4>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
                <Link
                href={item.href}
                className={`flex items-center px-3 py-3 text-lg mx-auto ${
                  pathname === item.href ? "bg-gradient-to-r from-black via-[#3636367a] to-transparent" : "hover:bg-gradient-to-r from-gray-600 via-[#3636367a] to-transparent"
                }`}
                >
                <item.icon className="  h-6 w-6 " />
                <div className="md:block ml-3 hidden text-white">{item.label}</div>
                </Link>
            </li>
          ))}
          <button onClick={async()=>{
         
          document.cookie.split(";").forEach((cookie) => {
          document.cookie = cookie
            .replace(/^ +/, "")
            .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
          });
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}  className="flex items-center text-lg hover:bg-gradient-to-r from-gray-600 via-[#3636367a] to-transparent px-3 py-3 w-full">
            <LogOut className=" h-6 w-6" />
            <div className="md:block ml-3 hidden">Logout</div>
          </button>
        </ul>
      </nav>
      <div className="py-4"></div>
    </div>
  );
}
