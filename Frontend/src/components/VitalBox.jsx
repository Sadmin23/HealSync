import React from 'react'

export default function VitalBox({ title, value, unit, selected }) {

  const bgColor = selected ? 'bg-green-700 text-white' : 'bg-slate-200'

  const textColor = selected ? 'text-white' : 'text-black'

  return (
      <div className={`${bgColor} rounded-md p-6 font-bold space-y-1`}>
        <p>{title}</p>
        <h1 className={`text-2xl text-black pt-3 ${textColor}`}>{value}</h1>
        <p>{unit}</p>
      </div>
  )
}
