import React from 'react';

const ImageDisplayModal = ({ originalImage, maskImage, isOpen, onClose }) => {
  if (!isOpen) return null;

  const saveImage = (imageData, fileName) => {
    const link = document.createElement('a');
    link.href = imageData;
    link.download = fileName;
    link.click();
  };

  const handleSaveOriginal = () => saveImage(originalImage, 'original-image.png');
  const handleSaveMask = () => saveImage(maskImage, 'mask-image.png');

  return (
    <>
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 mt-5 p-4"
      onClick={onClose}
      aria-label="Close modal"
      >
      <div 
        className="relative w-[60%] max-h-[90%] bg-[#16171a] rounded-lg shadow-2xl p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 hover:text-red-800 text-red-500 text-2xl transition ease-in-out"
          aria-label="Close modal"
          >
          &times;
        </button>
        <h3 className="text-2xl text-white mb-3 font-bold text-center border-b border-gray-700 pb-2">
          Image Preview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original Image Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg text-gray-300 mb-4 text-center">Original Image</h4>
            <div className="bg-[#292b30] p-4 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
              <img 
                src={originalImage} 
                alt="Original" 
                className="w-full h-auto max-h-[300px] object-contain rounded-md"
                />
            </div>
          </div>

          {/* Mask Image Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg text-gray-300 mb-4 text-center">Mask Image</h4>
            <div className="bg-[#292b30] p-4 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
              <img 
                src={maskImage} 
                alt="Mask" 
                className="w-full h-auto max-h-[300px] object-contain rounded-md"
                />
            </div>
          </div>
        </div>

        {/* Save Buttons */}
        <div className="flex justify-center space-x-64 mt-4">
          <button
            onClick={handleSaveOriginal}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 uppercase font-semibold text-sm"
            >
            Save Original
          </button>
          <button
            onClick={handleSaveMask}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 uppercase font-semibold text-sm"
            >
            Save Mask
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default ImageDisplayModal;
