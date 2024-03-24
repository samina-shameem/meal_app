import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input type="text" placeholder={"Search for a meal..." + props.fd} />
      <button>Search</button>
    </div>
  );
}

export default Search;
