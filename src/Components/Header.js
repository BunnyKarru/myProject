import React, { useState, useEffect } from "react";
import { addCountry } from "../Store/CountrySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./Travelore_transparent.png";

function Header() {
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
  
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchCountry = async () => {
    // Check if countryName is empty
    if (!countryName.trim()) {
      console.log("Please enter a country name");
      return;
    }
    navigate("/")
    
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      console.log(`https://restcountries.com/v3.1/name/${countryName}`);
      if (data[0].status && data[0].status === 404) {
        navigate('/notFound');
      } else {
        dispatch(addCountry(data));
        setCountryName("");
        navigate("/countries");
       
      }
    } catch (error) {
      console.log(error);
      navigate('/notFound')
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Call your button click handler function here
      searchCountry();
    }
  };

  return (
<header className="bg-gradient-to-r from-blue-800 to-blue-600">
  <div className="container mx-auto flex justify-between items-center py-3 px-6">
    <div className="flex items-center">
      <p className="text-white text-3xl font-bold hidden sm:inline">Trave</p>
      <p className="text-3xl text-gray-900 font-bold hidden sm:inline">Lore</p>
    </div>
    <div className="flex items-center sm:pl-4">
      <input
        type="text"
        id="search-bar"
        placeholder="Search..."
        className="bg-white border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-0 mr-auto"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={searchCountry}
      >
        Search
      </button>
    </div>
  </div>
</header>

  

  );
}

export default Header;
