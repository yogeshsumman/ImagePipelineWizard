import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import ImageDisplay from "./ImageDisplay";

const Canvas = ({ image, onExportMask }) => {
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("rgba(255, 255, 255, 1)");
  const [alpha, setAlpha] = useState(1);
  const [maskImage, setMaskImage] = useState(null);
  const [showImageDisplay, setShowImageDisplay] = useState(false);
  const canvasRef = useRef(null);

  const handleBrushSizeChange = (event) => {
    setBrushSize(event.target.value);
  };

  const handleBrushTransparencyChange = (event) => {
    const newAlpha = event.target.value;
    setAlpha(newAlpha);
    setBrushColor(`rgba(255, 255, 255, ${newAlpha})`);
  };

  const exportMask = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = canvasRef.current.canvas.drawing.width;
    canvas.height = canvasRef.current.canvas.drawing.height;

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(canvasRef.current.canvas.drawing, 0, 0);

    const maskWithBlackBg = canvas.toDataURL();
    setMaskImage(maskWithBlackBg);
    onExportMask(maskWithBlackBg);
    setShowImageDisplay(true);
  };

  const clearCanvas = () => {
    canvasRef.current.clear();
  };

  const saveImages = () => {
    const originalLink = document.createElement("a");
    originalLink.href = image;
    originalLink.download = "original-image.png";
    originalLink.click();

    exportMask();
  };

  const closeImageDisplay = () => {
    setShowImageDisplay(false);
  };



  return (
    <>
  <div className={`bg-[#1e2125] p-6 rounded-lg shadow-md mb-7 mx-7 ${showImageDisplay ? "blur-sm" : ""}`}>
    <h2 className="text-xl text-white mb-4 font-semibold">Draw Mask</h2>

    {/* Brush Size Input */}
    <div className="mb-4">
      <label className="block text-sm text-gray-300 mb-2">
        Brush Size: <span className="font-semibold text-white">{brushSize}</span>
      </label>
      <input
        type="range"
        min="1"
        max="50"
        step="1" // Smoother steps for brush size
        value={brushSize}
        onChange={handleBrushSizeChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>

    {/* Brush Transparency Input */}
    <div className="mb-4">
      <label className="block text-sm text-gray-300 mb-2">
        Brush Transparency: <span className="font-semibold text-white">{alpha}</span>
      </label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01" 
        value={alpha}
        onChange={handleBrushTransparencyChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>

    {/* CanvasDraw Component */}
    <div className="bg-[#21242a] p-4 rounded-lg mb-4 flex justify-center">
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={500}
        canvasHeight={500}
        brushColor={brushColor}
        brushRadius={brushSize}
        imgSrc={image}
        hideGrid={true}
      />
    </div>

  
    <div className="flex justify-center space-x-4">
      <button
        onClick={exportMask}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 uppercase font-semibold text-sm"
      >
        Export Mask
      </button>
      <button
        onClick={clearCanvas}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 uppercase font-semibold text-sm"
      >
        Clear Canvas
      </button>
    </div>
  </div>

  {/* ImageDisplay Modal */}
  {showImageDisplay && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <ImageDisplay
        originalImage={image}
        maskImage={maskImage}
        isOpen={showImageDisplay}
        onClose={closeImageDisplay}
      />
    </div>
  )}
</>

  );
  
};

export default Canvas;