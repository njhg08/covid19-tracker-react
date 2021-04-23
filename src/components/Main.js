import React, { useState, useEffect } from 'react';
import Statistics from './Statistics';

const Main = () => {
  const [selected, setSelected] = useState(0);
  const [world, setWorld] = useState([]);
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();
    setWorld(data.Global);
    setCountries(data.Countries);
  };

  useEffect(() => {
    fetchData();
  }, [selected]);

  return (
    <div className="max-w-lg mx-auto flex flex-col">
      <div className="mb-4">
        <select
          className="form-select p-2 w-full mb-2"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="0">Global</option>
          {countries.map((country) => (
            <option key={country.ID} value={country.ID}>
              {country.Country}
            </option>
          ))}
        </select>
      </div>
      <Statistics
        data={
          // eslint-disable-next-line
          selected != 0
            ? countries.find((country) => country.ID === selected)
            : world
        }
      />
    </div>
  );
};

export default Main;
