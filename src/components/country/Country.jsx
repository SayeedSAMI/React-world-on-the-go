import React, { useState } from "react";
import "./Country.css";

const Country = ({ content, handleVisitedCountries ,handleAddFlag }) => {

  // console.log(content);
  // console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // console.log("button Visited");
    // visited ? setVisited(false) : setVisited(true);

    setVisited(!visited);
    handleVisitedCountries(content);
  };

 
  return (
    <div className={`countryDivStyle ${visited && "countryVisited"}`}>
      <img
        className="flagStyle"
        src={content.flags.flags.png}
        alt={content.flags.flags.alt}
      />
      <div>
        <p className="pTagStyle">
          <span className="spanTagStyle">Name: </span> {content.name.common}
        </p>
        <p className="pTagStyle">
          <span className="spanTagStyle">Population: </span>{" "}
          {content.population.population}
        </p>
        <p className="pTagStyle">
          <span className="spanTagStyle">Region: </span> {content.region.region}
        </p>
        <p className="pTagStyle">
          <span className="spanTagStyle"> Area: </span> {content.area.area}{" "}
          {content.area.area > 300000 ? " Big Country" : " Small Country"}
        </p>
        <p className="pTagStyle">
          <span className="spanTagStyle"> Languages: </span>
          {Object.values(content?.languages?.languages || {}).join(", ")}
        </p>

        <p className="pTagStyle">
          <span className="spanTagStyle">Currencies: </span>
          {Object.values(content.currencies?.currencies || {})
            .map((cur) => `${cur.name} (${cur.symbol})`)
            .join(", ")}
        </p>
        <button onClick={handleVisited} className="visitedBtnStyle">
          {!visited ? "Not visited" : "Visited"}
        </button>

        <button onClick={()=>{handleAddFlag(content.flags.flags.png)}} className="visitedBtnStyle" style={{marginLeft : "10px" }}>Add Flag</button>
      </div>
    </div>
  );
};

export default Country;
