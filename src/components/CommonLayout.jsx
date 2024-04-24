import React from 'react';

export default function CommonLayout({ title, children }) {
  return (
    <div className='flex-col w-[32.5%]'>
      <h1 className="my-4 font-bold text-slate-400">{title}</h1>
      <div className='w-full h-72 bg-white border-gray-300 border shadow-xl rounded-lg p-6'>
        {children}
      </div>
    </div>
  );
}