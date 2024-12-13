// src/App.js
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import Canvas from "./components/Canvas";
import ImageDisplay from "./components/ImageDisplay";
import './styles/app.css'; // Import the CSS file


const App = () => {
  const [image, setImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);  // Storing the uploaded image
  };

  const handleMaskExport = (mask) => {
    setMaskImage(mask);  // Storing the generated mask image
  };

  const handleClearCanvas = () => {
    setMaskImage(null);  // Reset the mask image when canvas is cleared
  };

  return (
    <div>
      <h1>Image Inpainting Tool</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {image && <Canvas image={image} onExportMask={handleMaskExport} />}
      {maskImage && (
        <div>
          <ImageDisplay originalImage={image} maskImage={maskImage} />
          <button onClick={handleClearCanvas}>Clear Mask</button> {/* Clear Mask Button */}
        </div>
      )}
    </div>
  );
};

export default App;
