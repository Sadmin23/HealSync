import React from 'react';

export default function CommonLayout({ title, children }) {
  return (
    <div className='flex-col mt-4 w-[32.5%]'>
      <h1 className="my-4 ml-2 font-bold text-slate-400">{title}</h1>
      <div className='w-full h-80 bg-white border-gray-300 border shadow-xl rounded-lg px-6'>
        {children}
      </div>
    </div>
  );
}