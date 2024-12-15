import React, { useState } from "react";
import { Boxes } from "./ui/background-boxes";

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) { // Validation for image files
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageUpload(reader.result); // Pass the image data to the parent component
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="bg-[#1e212598] z-30 max-w-md w-full mx-auto p-5 rounded-lg shadow-md">
        <h1 className="text-lg font-bold text-white mb-4 text-center">
          Image Inpainting Tool
        </h1>

        {/* Accessible Label */}
        <label htmlFor="imageUpload" className="text-gray-300 mb-2 block">
          Upload an Image:
        </label>

        <input
          id="imageUpload"
          type="file"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-600 file:text-white
          hover:file:bg-blue-700
          cursor-pointer
          border-2 border-dashed border-blue-600
          bg-[#21242a] rounded-lg
          file:transition-colors file:duration-300"
        />

        {image && (
          <div className="mt-4 bg-[#21242a] p-4 rounded-lg flex justify-center">
            <img
              src={image}
              alt="Uploaded"
              className="max-w-36 h-auto object-contain rounded-md shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
