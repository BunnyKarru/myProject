import React from 'react'
import { useState } from 'react'
import { addCountry } from '../Store/CountrySlice'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Header() {
    const [countryName, setCountryName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const searchCountry = async () => {
      // Check if countryName is empty
      if (!countryName.trim()) {
        console.log("Please enter a country name");
        return;
      }
  
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
   
        dispatch(addCountry(data));
        
        navigate("countries");
      } catch (error) {
        console.log(error);
      }
    };
    
    return (
      <header className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4">
          <input
            type="text"
            id="search-bar"
            placeholder="Search..."
            className="bg-gray-800 border border-gray-700 rounded px-4 py-2 shadow-sm focus:outline-none"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <button onClick={searchCountry}>Search</button>
        </div>
      </header>
    );
  }
  
  export default Header;
  