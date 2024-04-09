import React from 'react'

function DetailsCard({ country, capital, region }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{country}</div>
      <p className="text-gray-700 text-base">
        Capital: {capital}
      </p>
      <p className="text-gray-700 text-base">
        Region: {region}
      </p>
    </div>
  </div>
  )
}

export default DetailsCard