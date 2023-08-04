/*import React from 'react';

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

export default Filter;*/


import React from 'react';
import PropTypes from 'prop-types';

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

// Prop types validation for the Filter component
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;

