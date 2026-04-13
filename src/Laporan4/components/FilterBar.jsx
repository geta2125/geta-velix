import React from 'react';

/**
 * FilterBar Component
 * Diperbarui untuk tata letak yang lebih lega dan tidak menempel dengan elemen lain.
 */
export default function FilterBar({ membership, setMembership, status, setStatus }) {
  // Class helper dengan transisi yang lebih halus dan shadow premium
  const selectClasses = `
    w-full md:w-56
    px-5 py-3.5
    rounded-2xl
    bg-white border border-gray-200
    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]
    text-sm font-semibold text-gray-700
    appearance-none
    cursor-pointer
    transition-all duration-300
    focus:ring-4 focus:ring-[#5d5250]/10 focus:border-[#5d5250]
    outline-none
  `;

  return (
    /* Menambahkan Margin Bottom (mb-8) agar tidak dempet dengan tabel di bawahnya */
    <div className="flex flex-col md:flex-row items-center gap-4 mt-6 mb-8">

      {/* Filter Membership */}
      <div className="relative w-full md:w-auto group">
        <select
          value={membership}
          onChange={(e) => setMembership(e.target.value)}
          className={selectClasses}
        >
          <option value="">Semua Membership</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
        {/* Ikon Panah Custom */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-[#5d5250]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Filter Status */}
      <div className="relative w-full md:w-auto group">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={selectClasses}
        >
          <option value="">Semua Status</option>
          <option value="Aktif">Aktif</option>
          <option value="Nonaktif">Nonaktif</option>
          <option value="Pending">Pending</option>
        </select>
        {/* Ikon Panah Custom */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-[#5d5250]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

    </div>
  );
}