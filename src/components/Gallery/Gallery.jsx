import React, { useState } from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import Header from '../Header/Header'; // Import Header here

import imageData from '../../assets/data.json';

function Gallery() {
  const [filter, setFilter] = useState(0);

  const handleFilterChange = (e) => {
    const selectedFilter = parseInt(e.target.value, 10);
    setFilter(selectedFilter);
  };

  const filteredData = filter === 0 ? imageData : imageData.filter(item => item.horns === filter);
  return (
    <>
      <div>
        <label>Filter by Horns: </label>
        <select onChange={handleFilterChange}>
          <option value={0}>All</option>
          <option value={1}>One Horn</option>
          <option value={2}>Two Horns</option>
          {/* Add options for other horn counts */}
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredData.map(item => (
          <HornedBeast key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Gallery;