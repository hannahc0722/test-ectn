import React from 'react';
import './styles/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-section" id="gallery">
      <h1>Gallery</h1>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Sample Image 1" />
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Sample Image 2" />
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Sample Image 3" />
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Sample Image 4" />
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Sample Image 5" />
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Sample Image 6" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
