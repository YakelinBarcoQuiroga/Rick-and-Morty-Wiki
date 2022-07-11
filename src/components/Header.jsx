import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Header = () => {

  const [rikyLocation, setRikyLocation] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setRikyLocation(res.data));
  }, []);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
    .then(res => setRikyLocation(res.data));
  }

  console.log(rikyLocation);

  return (
    <div>
      <div className="img-header"></div> <br />
      <h1 className="title-header">Rick and Morty Wiki</h1>
      <div className="search-box search-form">
          <input className="search-text" placeholder="Type a location (1 - 126)" type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
          <button className="search-button" onClick={searchType}>
             <i class="fa-solid fa-magnifying-glass"></i>
          </button>
      </div> <br />
      <h2>{rikyLocation.name}</h2> <br />
      <div className="data-population">
        <p><strong>type:</strong>{rikyLocation.type}</p>
        <p><strong>dimension:</strong> {rikyLocation.dimension}</p>
        <p><strong>population:</strong> {rikyLocation.residents?.length}</p>
      </div>
      <br />
      <h3 className="title-residents">Residents</h3> <br />
      <div className="container-Character">
        {rikyLocation.residents?.map(resident => (
              <ResidentInfo key={resident} resident={resident}/>
        ))}
      </div>
    </div>
  );
};

export default Header;
