import React from 'react';
import DetailsCard from './DetailsCard';
import { useSelector } from 'react-redux';

function Show() {
    const countryData = useSelector(state => state.dataupdator.countrydata);
    console.log(countryData);

    return (
        <div className='flex-wrap'>
            <div className='flex-wrap'>
                {countryData.map(country => (
                    <React.Fragment key={country[0].name.common}>
                        <DetailsCard
                            key={country[0].name.common}  // Use a unique key
                            country={country[0].name.common}
                            capital={country[0].capital[0]}
                            region={country[0].region}
                        />
                        {country[1] && (
                            <DetailsCard
                                key={country[1].name.common}  // Use a unique key
                                country={country[1].name.common}
                                capital={country[1].capital[0]}
                                region={country[1].region}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Show;
