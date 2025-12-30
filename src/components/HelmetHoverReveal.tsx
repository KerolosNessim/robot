import React, { useRef, useState } from "react";

export default function HelmetHoverReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;

    setPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      ref={wrapRef}
      className="revealWrap"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
    >
      {/* brain image */}
      <img className="brain" src="/human.png" alt="brain"  />

      {/* human image */}
      <img
        className="human"
        src="/helmet.png"
        alt="human"
        style={
          {
            ["--x"]: pos.x,
            ["--y"]: pos.y,
            ["--r"]: hover ? "200px" : "0px",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
