import React from 'react';

const Statistics = ({ data }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Statistics</h2>
      <div className="mb-4">
        <h3 className="font-bold">Cases</h3>
        <p>
          New Confirmed Cases:{' '}
          {data.NewConfirmed
            ? data.NewConfirmed.toLocaleString()
            : data.NewConfirmed}{' '}
        </p>
        <p>
          Total Confirmed:{' '}
          {data.TotalConfirmed
            ? data.TotalConfirmed.toLocaleString()
            : data.TotalConfirmed}{' '}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Deaths</h3>
        <p>
          New Deaths:{' '}
          {data.NewDeaths ? data.NewDeaths.toLocaleString() : data.NewDeaths}{' '}
        </p>
        <p>
          Total Deaths:{' '}
          {data.TotalDeaths
            ? data.TotalDeaths.toLocaleString()
            : data.TotalDeaths}{' '}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Recoveries</h3>
        <p>
          New Deaths:{' '}
          {data.NewDeaths ? data.NewDeaths.toLocaleString() : data.NewDeaths}{' '}
        </p>
        <p>
          Total Deaths:{' '}
          {data.TotalDeaths
            ? data.TotalDeaths.toLocaleString()
            : data.TotalDeaths}{' '}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
