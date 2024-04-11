import React from 'react'
import { useEffect } from "react";

function DetailsCard({ country, capital, region ,onClick}) {
  useEffect(() => {
    const disableBackButton = () => {
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener('popstate', disableBackButton);
    };

    disableBackButton();

    return () => {
      window.removeEventListener('popstate', disableBackButton);
    };
  }, []);
  
  
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 shadow-blue-400 bg-white inline-block h-40 w-80 ml-2 mr-2 cursor-pointer hover:bg-gray-400 " onClick={onClick}>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{country}</div>
      <p className="text-gray-700 text-base">
        Capital: {capital?capital.join(', ') : 'none'}
      </p>
      <p className="text-gray-700 text-base">
        Region: {region}
      </p>
    </div>
  </div>
  )
}

export default DetailsCard