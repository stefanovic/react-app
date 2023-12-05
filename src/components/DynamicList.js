// src/components/DynamicList.js

import React, { useState } from 'react';

const Preview = ({ selectedItem, onClose }) => {
  if (!selectedItem) return null;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{selectedItem}</h5>
        <p className="card-text">Additional details about {selectedItem} go here.</p>
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const DynamicList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePreview = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item" onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <Preview selectedItem={selectedItem} onClose={handleClosePreview} />
    </div>
  );
};

export default DynamicList;
