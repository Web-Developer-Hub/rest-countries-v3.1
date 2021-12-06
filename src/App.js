import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className="header">This is my simple rest countries data load to an API...</h2>
      <CoutryLoad></CoutryLoad>
    </div>
  );
}

//this compunent data load to an api....
function CoutryLoad() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/all`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  return (
    <div>
      <div className="mainDiv">
        {countries.map((country) => <DisplayCountries data={country} key={country.name.common}></DisplayCountries>)}
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>All rights reversed.Copyright © 2021 Habibor-Rahaman.com</div>
    </div>

  )
}


//this conponent my data to display in the ui....
function DisplayCountries(props) {
  const { flags, name, flag, region, population, maps, independent, capital, area, status, timezones } = props.data;
  const timezone = timezones[0];
  return (
    <div className="childDiv">
      <img src={flags.svg ? flags.svg : 'Empty Data'} alt="country" />
      <p>Official Name: {name.official ? name.official : 'Empty Data'} <span>{flag ? flag : 'Empty Data'}</span></p>
      <p>Common Name: {name.common ? name.common : 'Empty Data'} <span>{flag ? flag : 'Empty Data'}</span></p>
      <p>Capital: {capital ? capital : 'Empty Data'}</p>
      <p>Area : {area ? area : 'Empty Data'}</p>
      <p>Population: {population ? population : 'Empty Data'}</p>
      <p>Timezone: {timezone ? timezone : 'Empty Data'}</p>
      <p>Independent: {independent ? 'Trure' : 'False'}</p>
      <p>Region: {region ? region : 'Empty Data'}</p>
      <p>Status: {status ? status : 'Empty Data'}</p>
      <p>Location: <a href={maps.googleMaps ? maps.googleMaps : 'Empty Data'} target="_blank" rel='noreferrer'> google map of county</a>  </p>
    </div>
  )
}
export default App;
