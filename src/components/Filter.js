import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts by name"
    />
  );
};

export default Filter;
