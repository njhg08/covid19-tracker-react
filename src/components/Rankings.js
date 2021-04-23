import React from 'react';

const Rankings = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-lg mb-4">Rankings</h2>
      <div className="flex flex-col w-full md:flex-row">
        <div className="p-4 flex-1">
          <h3 className="font-bold">Total Cases</h3>
          <ul class="list-decimal list-inside text-center">
            {data
              .sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed ? 1 : -1))
              .slice(0, 5)
              .map((country) => (
                <li key={country.ID}>{country.Country} </li>
              ))}
          </ul>
        </div>

        <div className="p-4 flex-1">
          <h3 className="font-bold">Total Deaths</h3>
          <ul class="list-decimal list-inside text-center">
            {data
              .sort((a, b) => (a.TotalDeaths < b.TotalDeaths ? 1 : -1))
              .slice(0, 5)
              .map((country) => (
                <li key={country.ID}>{country.Country}</li>
              ))}
          </ul>
        </div>

        <div className="p-4 flex-1">
          <h3 className="font-bold">Total Recoveries</h3>
          <ul class="list-decimal list-inside text-center">
            {data
              .sort((a, b) => (a.TotalRecovered < b.TotalRecovered ? 1 : -1))
              .slice(0, 5)
              .map((country) => (
                <li key={country.ID}>{country.Country}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
