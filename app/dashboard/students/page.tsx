
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Stcard from "./stcard";
export default async function StudentsPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: students, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error("Error fetching students:", error);
    return <div>Error loading students</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Students</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Stcard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
