// @ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from 'react';

function SplashCursor({
  // Add whatever props you like for customization
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,  BACK_COLOR = { r: 0, g: 0, b: 0 },
  TRANSPARENT = false,
  children,
}) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        throw new Error('WebGL not supported');
      }

      // Set canvas size
      const resizeCanvas = () => {
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    } catch (err) {
      console.error('Error initializing WebGL:', err);
      setError(err);
    }
  }, []);

  if (error) {
    // Render children without effects if there's an error
    return <div>{children}</div>;
  }

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        id="fluid"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          backgroundColor: "#000000", // black background for canvas container
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          // no fixed height, allow page content to determine height
        }}
      >
        {children}
      </div>
    </div>
  );
}

export { SplashCursor };
