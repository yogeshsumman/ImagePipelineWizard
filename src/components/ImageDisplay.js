// src/components/ImageDisplay.js
import React from 'react';

const ImageDisplay = ({ originalImage, maskImage }) => {
  return (
    <div>
      <h3>Original Image and Mask</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h4>Original Image</h4>
          <img src={originalImage} alt="Original" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
          <h4>Mask Image</h4>
          <img src={maskImage} alt="Mask" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
