import React, { use } from "react";

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const  Content = countriesData.countries;
  console.log(Content);
  console.log(Content.length);

//  console.log("FULL DATA:", countriesData);
//  console.log("COUNTRIES LENGTH:", countriesData?.countries?.length);
// console.log("COUNTRIES:", countriesData.countries);
// console.log("STRINGIFIED:", JSON.stringify(countriesData));

  return (
    <div>
      <h1>React World on the go...</h1>
      <h3>its not working</h3>
    </div>
  );
};

export default Countries;
