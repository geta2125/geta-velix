import { useState } from "react";
import Guest from "./pages/Guest";
import Admin from "./pages/Admin";

export default function Laporan4() {

  const [role, setRole] = useState("guest"); // default

  return (
    <div className="p-6">

      <h1 className="text-xl font-bold text-center mb-4">
        Laporan 4 - Member Coffee ☕
      </h1>

      {/* SWITCH ROLE */}
      <div className="flex justify-center gap-3 mb-6">

        <button
          onClick={() => setRole("guest")}
          className={`px-4 py-2 rounded 
            ${role === "guest" ? "bg-[#6b5e5b] text-white" : "bg-gray-200"}`}
        >
          Guest
        </button>

        <button
          onClick={() => setRole("admin")}
          className={`px-4 py-2 rounded 
            ${role === "admin" ? "bg-[#6b5e5b] text-white" : "bg-gray-200"}`}
        >
          Admin
        </button>

      </div>

      {/* CONDITIONAL RENDER */}
      {role === "guest" && <Guest />}
      {role === "admin" && <Admin />}

    </div>
  );
}