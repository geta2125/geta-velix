import React from 'react';

function getInitials(name = '') {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

const avatarColors = [
  'bg-blue-50 text-blue-700',
  'bg-emerald-50 text-emerald-700',
  'bg-amber-50 text-amber-700',
  'bg-purple-50 text-purple-700',
];

const badgeStyle = {
  Premium: 'bg-amber-50 text-amber-800 ring-1 ring-amber-200',
  Pro: 'bg-blue-50 text-blue-800 ring-1 ring-blue-200',
  Standard: 'bg-gray-100 text-gray-500',
};

export default function CardItem({ item, index = 0 }) {
  const initials = getInitials(item.nama);
  const avColor = avatarColors[index % avatarColors.length];
  const badge = badgeStyle[item.membership] || badgeStyle.Standard;

  return (
    <div className="
      group bg-white rounded-2xl overflow-hidden
      border border-gray-100
      hover:border-gray-200 hover:-translate-y-1
      transition-all duration-200 cursor-pointer
    ">
      {/* Gambar / Avatar */}
      <div className="relative aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
        {item.gambar ? (
          <img
            src={item.gambar}
            alt={item.nama}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-base ${avColor}`}>
            {initials}
          </div>
        )}
        {/* Badge membership di atas gambar */}
        <span className={`absolute top-2 right-2 text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm ${badge}`}>
          {item.membership || 'Standard'}
        </span>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="font-medium text-gray-900 text-sm truncate leading-tight">{item.nama}</p>
        <div className="flex items-center gap-1.5 mt-1 text-gray-400">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs truncate">{item.email}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1 text-gray-400">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-gray-400">{item.detail?.kota || 'Indonesia'}</span>
          
        </div>
        {/* Tambahan Status */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className={`w-1.5 h-1.5 rounded-full ${item.detail?.status === 'Aktif' ? 'bg-green-500' :
              item.detail?.status === 'Pending' ? 'bg-amber-500' : 'bg-gray-400'
            }`} />
          <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
            {item.detail?.status || 'Unknown'}
          </span>
        </div>
      </div>
    </div>
  );
}