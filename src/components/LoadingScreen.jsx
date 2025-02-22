import React, { useEffect, useState } from "react";
import '../style/components/LoadingScreen.css';

const Loading = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 3000); // Show animation for 4.5 seconds
    setTimeout(() => onFinish(), 2500); // Hide after animation completes
  }, [onFinish]);

  return (
    <div className={`loading ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo-container-animation">
        <div className="logo-border">
          <img src="/assets/loading.png" alt="OKY Logo" className="logo-animation" />
        </div>
      </div>
      <div className="text-animation">
        <h2>OKY Webcraft</h2>
      </div>
    </div>
  );
};

export default Loading;
