
"use client"
import React, { useState } from 'react';


const FilterSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsVisible(!isVisible);
  };

  return (
    <div>

      <h4>3145 ITEMS</h4>

      <a href="#" className="toggle-text" onClick={handleToggle}>
        {isVisible ? 'Hide Filter' : 'Show Filter'}
      </a>
      <hr className="toggle-line" />
      {isVisible && (
        <div className="filter-section">
          <h3>Customized</h3>
          <ul className="sub-filters">
            <li>Occasion</li>
            <li>Fabrik</li>
            <li>Segment</li>
          </ul>

        </div>
      )}


    </div>
  );
};
g
export default FilterSection;


