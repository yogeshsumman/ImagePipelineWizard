// src/components/Canvas.js
import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const Canvas = ({ image, onExportMask }) => {
  const [brushSize, setBrushSize] = useState(5);
  const canvasRef = useRef(null);

  const handleBrushSizeChange = (event) => {
    setBrushSize(event.target.value);
  };

  const exportMask = () => {
    const mask = canvasRef.current.getDataURL(); // Get the mask as a data URL
    onExportMask(mask);  // Export the mask to the parent
  };

  const clearCanvas = () => {
    canvasRef.current.clear();  // Clears the canvas
  };

  return (
    <div>
      <h2>Draw Mask</h2>
      <div>
        <label>Brush Size: </label>
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleBrushSizeChange}
        />
      </div>

      <CanvasDraw
        ref={canvasRef}
        canvasWidth={500}
        canvasHeight={500}
        brushColor="white"
        brushRadius={brushSize}
        imgSrc={image}
        hideGrid={true}
      />

      <div>
        <button onClick={exportMask}>Export Mask</button> {/* Export Button */}
        <button onClick={clearCanvas}>Clear Canvas</button> {/* Clear Button */}
      </div>
    </div>
  );
};

export default Canvas;
