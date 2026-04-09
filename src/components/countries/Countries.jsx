import React, { use, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";


const Countries = ({ countriesPromise }) => {

  const countriesData = use(countriesPromise);
  const Content = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountriesFlag, setVisitedCountriesFlag] =useState([]);

  // visited countries adding function
  const handleVisitedCountries = (country) => {

    console.log("handle visited countries clicked" ,country);
    const newVisitedCountries = [...visitedCountries , country];
    setVisitedCountries(newVisitedCountries);
  };
  
  // Flag adding function
   const handleAddFlag =(flags)=>{
    // console.log('flag added ');
    const newAddFlag = [...visitedCountriesFlag, flags];
    setVisitedCountriesFlag(newAddFlag);
  }

  // console.log(Content);
  // console.log(Content.length);
  //  console.log("FULL DATA:", countriesData);
  //  console.log("COUNTRIES LENGTH:", countriesData?.countries?.length);
  // console.log("COUNTRIES:", countriesData.countries);
  // console.log("STRINGIFIED:", JSON.stringify(countriesData));

  return (
    <>
      <h1>World on the goooo</h1>
      <h3>Total visited country : {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>

      <ol>
        {
          visitedCountriesFlag.map(
            (flags,index) => <li key={index}   ><img style={{width:'50px'}} src={flags} alt="" /></li>
          )
        }
      </ol>

      <div className="countryContainerDiv">
        {Content.map((content) => (
          <Country
            key={content.cca3.cca3}
            content={content}
            handleVisitedCountries ={handleVisitedCountries}
            handleAddFlag ={handleAddFlag}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
