import React from 'react';

function NoResultsFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-blue-900 text-blue-200">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">No Results Found</h2>
        <ul className="text-lg text-gray-300">
          <li className="mb-2">Maybe the problem is due to:</li>
          <li className="flex items-center mb-2">
            <span className="mr-2">1.</span> No country with the name you searched
          </li>
          <li className="flex items-center mb-2">
            <span className="mr-2">2.</span> Ensure that the spelling of the country is correct
          </li>
          <li className="flex items-center">
            <span className="mr-2">3.</span> If the name of the country contains more than one word, make sure to give space between words
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoResultsFound;

