import React, { useState } from "react";
import "./ImageZoom.css";

function ImageZoom({ images }) {
  const [hoveredImage, setHoveredImage] = useState(images[0]);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="image-zoom-container">
      <div className="thumbnail-list">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="product"
            className={`thumbnail ${hoveredImage === img ? "active" : ""}`}
            onMouseEnter={() => setHoveredImage(img)}
          />
        ))}
      </div>

      <div
        className="main-image"
        onMouseEnter={() => setZoomVisible(true)}
        onMouseLeave={() => setZoomVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <img src={hoveredImage} alt="product" />
        {zoomVisible && (
          <div
            className="zoomed-image"
            style={{
              backgroundImage: `url(${hoveredImage})`,
              backgroundPosition: `${(cursorPos.x / 300) * 100}% ${(cursorPos.y / 300) * 100}%`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default ImageZoom;
