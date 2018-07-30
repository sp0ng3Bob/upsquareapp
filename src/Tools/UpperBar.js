import React from 'react';
import './UpperBar.css';

const upperBar = (props) => {
  return ( 
    <div className="UpperBar">
      <b id="home">Home</b>
      <img id="search" src="https://cdn4.iconfinder.com/data/icons/ios7-essence/22/common_search_lookup__-512.png" alt="Search icon" />
    </div>
  );
};

export default upperBar;
