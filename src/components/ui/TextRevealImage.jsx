import { useState, useRef, useEffect } from "react";
import ashaan from "../../assets/ashaan.png";

/**
 * TextRevealImage - Text that reveals an image behind it on hover
 * Creates a mask effect where text fades and image appears
 */
export function TextRevealImage({ children, className }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const revealRadius = 40;
  const imageScale = 1.8; // Scale image up to 1.8x size

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match container
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const img = new Image();
    img.src = ashaan;

    img.onload = () => {
      // Draw on canvas
      const drawCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (isHovering) {
          // Draw image scaled up (bigger)
          ctx.drawImage(
            img,
            0,
            0,
            canvas.width * imageScale,
            canvas.height * imageScale,
          );

          // Create circular reveal around cursor
          ctx.globalCompositeOperation = "destination-in";
          ctx.beginPath();
          ctx.arc(mousePos.x, mousePos.y, revealRadius, 0, Math.PI * 2);
          ctx.fill();

          // Add gradient fade around reveal circle
          ctx.globalCompositeOperation = "destination-out";
          const gradient = ctx.createRadialGradient(
            mousePos.x,
            mousePos.y,
            revealRadius * 0.5,
            mousePos.x,
            mousePos.y,
            revealRadius * 1.2,
          );
          gradient.addColorStop(0, "rgba(0,0,0,0)");
          gradient.addColorStop(1, "rgba(0,0,0,1)");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      };

      drawCanvas();
    };
  }, [mousePos, isHovering]);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text Layer */}
      <div className="relative">{children}</div>

      {/* Canvas for image reveal */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      />
    </div>
  );
}
