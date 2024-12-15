// src/App.js
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import Canvas from "./components/Canvas";
import ImageDisplay from "./components/ImageDisplay";
import './styles/app.css'; // Import the CSS file
import Header from "./components/Header";
import Footer from "./components/Footer";


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
    <>
      <Header />
      <div className="app-container min-h-screen ">
        <ImageUpload onImageUpload={handleImageUpload} />
        {image && <Canvas image={image} onExportMask={handleMaskExport} />}
        {maskImage && (
          <div>
            <ImageDisplay originalImage={image} maskImage={maskImage} />
            {/* <button onClick={handleClearCanvas}>Clear Mask</button> */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
  
};

export default App;
