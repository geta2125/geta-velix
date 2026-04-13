import React from 'react';

/**
 * Komponen TableAdmin
 * @param {Array} data - Array of objects berisi data user
 */
export default function TableAdmin({ data = [] }) {

  // 1. Fungsi Helper untuk Styling Status
  const getStatusStyle = (status) => {
    const s = status?.toLowerCase();
    switch (s) {
      case 'aktif':
      case 'active':
        return {
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500'
        };
      case 'pending':
        return {
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          dot: 'bg-amber-500'
        };
      default:
        return {
          badge: 'bg-slate-50 text-slate-600 border-slate-200',
          dot: 'bg-slate-400'
        };
    }
  };

  return (
    <div className="w-full">
      {/* Container utama dengan scroll horizontal untuk mobile */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-left">

          {/* 2. Header Tabel dengan gaya Modern-Dark */}
          <thead className="bg-[#5d5250]">
            <tr>
              <th scope="col" className="w-16 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/90">
                No.
              </th>
              <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/90">
                Nama Lengkap
              </th>
              <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/90">
                Email
              </th>
              <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/90">
                Lokasi
              </th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/90">
                Membership
              </th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/90">
                Status
              </th>
            </tr>
          </thead>

          {/* 3. Body Tabel */}
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item, index) => {
                const style = getStatusStyle(item.detail?.status);
                return (
                  <tr
                    key={item.id || index}
                    className="group transition-colors hover:bg-gray-50/80"
                  >
                    {/* Nomor Urut */}
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-400">
                      {index + 1}.
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">{item.nama}</div>
                      <div className="text-[10px] text-gray-400">{item.detail?.umur} Tahun</div>
                    </td>

                    {/* Email */}
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-xs text-gray-900">{item.detail?.kota || '-'}</div>
                    </td>

                    {/* Badge Membership */}
                    <td className="whitespace-nowrap px-6 py-4 text-center text-sm">
                      <span className="inline-flex items-center rounded-lg bg-[#fdf8f7] px-2.5 py-1 font-medium text-[#8d6e63] ring-1 ring-inset ring-[#eac7c7]/40">
                        {item.membership}
                      </span>
                    </td>

                    {/* Status Badge dengan Dot */}
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${style.badge}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                        {item.detail?.status || "N/A"}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              /* 4. Tampilan jika data kosong */
              <tr>
                <td colSpan="5" className="py-24 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-2xl">
                      📂
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Data tidak ditemukan</p>
                    <p className="text-xs text-gray-500">Belum ada entri data dalam daftar ini.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer info (Opsional) */}
      <div className="mt-4 text-right">
        <p className="text-xs text-gray-400">Total: {data.length} baris ditampilkan</p>
      </div>
    </div>
  );
}