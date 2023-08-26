import React from 'react';

const SearchField = ({ searchChange }) => {
  return (
    <div className="mt3 mb4">
      <input 
        type="search" 
        placeholder="Search robots" 
        className="pa3 ba b--green bg-lightest-blue" 
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchField;