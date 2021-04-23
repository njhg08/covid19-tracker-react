import React, { useState, useEffect } from 'react';
import Rankings from './Rankings';
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
    console.log(
      data.Countries.sort((a, b) =>
        a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
      ).slice(0, 5)
    );
  };

  useEffect(() => {
    fetchData();
  }, [selected]);

  return (
    <main className="max-w-4xl mx-auto flex flex-col min-h-screen bg-white p-10">
      <div className="mb-4">
        <p className="mb-2 font-bold">Select Data: </p>
        <select
          className="form-select p-2 min-w-full mb-2"
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

      <Rankings data={countries} />
    </main>
  );
};

export default Main;
