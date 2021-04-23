import moment from 'moment';
import React from 'react';

const Statistics = ({ data }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <h2 className="font-bold text-lg">Statistics </h2>
      <p>(as of {moment(data.Date).format('MMMM Do YYYY, h:mm:ss a')})</p>
      <div className="flex flex-col w-full md:flex-row">
        <div className="p-4 flex-1">
          <h3 className="font-bold">Cases</h3>
          <p>New Cases:</p>
          <span className="font-bold">
            {data.NewConfirmed
              ? data.NewConfirmed.toLocaleString()
              : data.NewConfirmed}{' '}
          </span>

          <p>Total Cases: </p>
          <span className="font-bold">
            {data.TotalConfirmed
              ? data.TotalConfirmed.toLocaleString()
              : data.TotalConfirmed}{' '}
          </span>
        </div>

        <div className="p-4 flex-1">
          <h3 className="font-bold">Deaths</h3>
          <p>New Deaths: </p>
          <span className="font-bold">
            {data.NewDeaths ? data.NewDeaths.toLocaleString() : data.NewDeaths}{' '}
          </span>

          <p>Total Deaths: </p>
          <span className="font-bold">
            {data.TotalDeaths
              ? data.TotalDeaths.toLocaleString()
              : data.TotalDeaths}{' '}
          </span>
        </div>

        <div className="p-4 flex-1">
          <h3 className="font-bold">Recoveries</h3>
          <p>New Recoveries: </p>
          <span className="font-bold">
            {data.NewRecovered
              ? data.NewRecovered.toLocaleString()
              : data.NewRecovered}{' '}
          </span>
          <p>Total Recoveries: </p>
          <span className="font-bold">
            {data.TotalRecovered
              ? data.TotalRecovered.toLocaleString()
              : data.TotalRecovered}{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
