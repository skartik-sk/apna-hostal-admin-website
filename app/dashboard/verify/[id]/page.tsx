"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

export default function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<any>(null);
  const [profileError, setProfileError] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        setProfileError(error);
        notFound();
      } else {
        setUser(data);
      }
    };

    fetchUser();
  }, [params.id, supabase]);

  const handleSubmit = async () => {
    const { data: updatedUser, error } = await supabase
      .from("isVerified")
      .insert({
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        profile: params.id,
      })
      .select();
    if (updatedUser) {
      const { data, error } = await supabase
        .from("profiles")
        .update({ isVerified: true })
        .eq("id", params.id);
      if (data) {
        console.log(data);
      }

      if (error) {
        console.error("Error updating profile:", error);
      } else {
        router.push("/dashboard/verify");
        router.refresh();
      }
    }

    if (error) {
      console.error("Error creating notice:", error);
    }
  };

  if (profileError) {
    return null;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6 justify-between w-full"></div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full">
            <p className="mb-2">
              <strong className="font-normal">Name:</strong>{" "}
              <span className="text-[#1890FF] font-medium">
                {user.full_name}
              </span>
            </p>
            <p className="mb-2">
              <strong className="font-normal">Enrollment:</strong>{" "}
              <span className="text-[#1890FF] font-medium">
                {user.enrollment}
              </span>
            </p>
          </div>
          <div className="w-full">
            <p className="mb-2">
              <strong className="font-normal">Phone:</strong>{" "}
              <span className="text-[#1890FF] font-medium">{user.phone}</span>
            </p>
            <p className="mb-2">
              <strong className="font-normal">Email:</strong>{" "}
              <span className="text-[#1890FF] font-medium">{user.email}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full">
            <p className="mb-2">
              <strong className="font-normal">Hostal:</strong>{" "}
              <span className="text-[#1890FF] font-medium">{user.hostel}</span>
            </p>
            <p className="mb-2">
              <strong className="font-normal">Room No:</strong>{" "}
              <span className="text-[#1890FF] font-medium">{user.room}</span>
            </p>
          </div>
          <div className="w-full">
            <p className="mb-2">
              <strong className="font-normal">Year:</strong>{" "}
              <span className="text-[#1890FF] font-medium">{user.year}</span>
            </p>
            <p className="mb-2">
              <strong className="font-normal">Branch:</strong>{" "}
              <span className="text-[#1890FF] font-medium">{user.branch}</span>
            </p>
          </div>
        </div>

        <div className="w-fit">
          {user.isVerified == false ? (
            <Button onClick={handleSubmit} variant={"approve"}>
              Approve
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
}
