"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Logo1} from "@/logo";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: "admin@apnahostal.com", // Replace with your admin email
      password: password,
    });

    if (error) {
      setError("Invalid password");
    } else {
      router.push("/dashboard");
    }
  };

  return (

    <div className="w-full h-full flex">
      <div className="w-screen h-screen absolute -z-10">
        <img
          src="https://i.pinimg.com/564x/07/7f/f4/077ff424e90f883ed2e5faba90981b68.jpg"
          className="w-full h-full object-cover transform rotate-180 opacity-55"
          alt="Background"
        />
        <div className="absolute inset-0 bg-white opacity-60"></div>
      </div>
      <div className="w-1/2 bg-[#1890FF] items-center justify-center hidden md:flex">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48">
        <Logo1 />
        </div>
        <h4 className="text-3xl font-bold md:block hidden text-white">
        <div className="flex flex-col items-center">
          <div>Apna Hostal</div>
        </div>
        </h4>
      </div>
      </div>
      <div className="flex items-center justify-center min-h-screen w-full bg-transparent">
      <div className="p-8 bg-transparent rounded-lg w-96">
        <h1 className="text-3xl  font-bold text-center text-black mb-6">
        Admin Login
        </h1>
        <form onSubmit={handleLogin}>
        <div className="space-y-4">
          <div className="space-y-2">
          <Label htmlFor="Email">Email</Label>
          <Input
            id="email"
            type="text"
            value="admin@apnahostal.com"
            readOnly
            className="bg-gray-200 cursor-not-allowed"
          />
          <div className="h-3"></div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
          type="submit"
          className="w-full bg-[#1890FF] hover:bg-[#1373cd]"
          >
          Login
          </Button>
        </div>
        </form>
      </div>
      </div>
    </div>
  );
}
