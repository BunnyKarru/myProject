import React from 'react';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

const Country = () => {
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

  const data = useSelector(state => state.dataupdator.countrydata);

  
  console.log(data);

const name = data[0].name.common;
const flag = data[0].flags.png;
console.log("guggug");
console.log(flag);
console.log("guggug");
const emblem = data[0].coatOfArms.png; // Accessing coatOfArms property
const region = data[0].region;
const population = data[0].population;
const neighboringCountries = data[0].borders;
const languages = Object.values(data[0].languages);
const map = data[0].maps.googleMaps;

  const capital = data[0].capital;


 // Accessing nested property
const area = data[0].area;
const timezone = data[0].timezones[0];
const currencies = Object.values(Object.values(Object.values(data[0].currencies)));
const money = Object.values(currencies[0])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-200 text-gray-800 flex flex-col items-center justify-center pt-2">
    <div className="bg-gray-200 py-4 px-6 flex flex-col items-center md:flex-row md:justify-between shadow-md shadow-blue-400">
      <img src={flag} alt={`Flag of ${name}`} className="mx-auto mb-4 rounded-lg md:mx-0 md:w-1/2" />
      <img src={emblem} alt={`Emblem of ${name}`} className="mx-auto mb-4 rounded-lg md:mx-0 md:w-1/3" />
    </div>
    <div className="p-6 md:px-8 lg:px-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">{name}</h2> {/* Country name */}
      <div className="border-b border-gray-300 w-full mb-4" /> {/* Added border line */}
      {/* Country details arrangement changes at medium breakpoint */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <p className="col-span-1 text-gray-800 mb-2"><strong>Region:</strong> {region}</p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Population:</strong> {population}</p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Neighboring Countries:</strong> {neighboringCountries ? neighboringCountries.join(', ') : "None"}</p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Languages:</strong>{languages ? languages.join(', ') : "None"}</p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Capital:</strong> {capital ? capital.join(', ') : "None"}</p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Currency:</strong> {money.join(', ')}</p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Area:</strong> {area} km<sup>2</sup></p>
        <p className="col-span-1 text-gray-800 mb-2"><strong>Timezone:</strong> {timezone}</p>
        <a href={map} className="col-span-1 text-blue-500 hover:underline " target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </div>
    </div>
  </div>
  
  );
};

export default Country;
