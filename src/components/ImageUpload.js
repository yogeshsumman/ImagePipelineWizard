// src/components/ImageUpload.js
import React, { useState } from "react";

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageUpload(reader.result);  // Passing the image to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" style={{ width: "300px" }} />}
    </div>
  );
};

export default ImageUpload;
