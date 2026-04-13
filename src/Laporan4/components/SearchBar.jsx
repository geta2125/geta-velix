import React from 'react';

export default function SearchBar({ search, setSearch }) {
    return (
        <div className="w-full relative group">
            {/* --- ICON SEARCH (SVG) --- */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 group-focus-within:text-[#5d5250] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {/* --- INPUT FIELD --- */}
            <input
                type="text"
                placeholder="Cari nama atau email pengguna..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
          w-full 
          pl-14 pr-12 py-4 
          text-base font-medium text-gray-800 
          bg-white border border-gray-200 
          rounded-2xl shadow-sm
          placeholder:text-gray-400 
          transition-all duration-300 
          focus:outline-none 
          focus:ring-4 focus:ring-[#5d5250]/10 
          focus:border-[#5d5250] 
          focus:shadow-lg
        "
            />

            {/* --- ICON HAPUS / CLEAR (Hanya muncul jika ada teks) --- */}
            {search && (
                <button
                    onClick={() => setSearch('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-4"
                >
                    <div className="p-1.5 rounded-lg bg-gray-100 text-gray-400 hover:text-red-500 transition-colors">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </button>
            )}
        </div>
    );
}