import React from 'react';
import DetailsCard from './DetailsCard';
import { useSelector ,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { filterData } from '../Store/CountrySlice';
import { useEffect } from 'react';

function Show() {
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
  
    const countryData = useSelector(state => state.dataupdator.countrydata);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
  



    return (
        <div className='flex flex-col sm:flex-row h-screen p-3 justify-evenly bg-gradient-to-br from-black to-blue-900'>
  <div className='flex flex-col sm:flex-row gap-y-4 py-3 px-3 justify-evenly overflow-y-auto'>
    {countryData.map((country) => (
      country.map((harin) => (
        <React.Fragment key={harin.name.common}>
          <DetailsCard
            key={harin.name.common} // Use a unique key
            country={harin.name.common}
            capital={harin.capital}
            region={harin.region}
            onClick={() => {
              dispatch(filterData(harin.name.common));
              navigate('/country');
            }}
          />
        </React.Fragment>
      ))
    ))}
  </div>
</div>

    
    );
}

export default Show;
