import React from 'react';

const Header = () => {
  return (
    <div className="bg-green-500 p-4 mb-5">
      <h1 className="text-white text-3xl mb-2">
        <i className="fas fa-virus"></i>
        <span className="text-white font-bold"> Covid-19 Tracker</span>
      </h1>

      <p className="text-sm">
        API:{' '}
        <a
          href="http://covid19api.com"
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          covid19api.com
        </a>
      </p>
    </div>
  );
};

export default Header;
