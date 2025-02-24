import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "../style/components/LoadingScreen.css";

const Loading = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 2000); // Start fade-out animation

    setTimeout(() => {
      // Show confetti effect after loading is done
      setShowConfetti(true);

      // Stop confetti after a few seconds and call onFinish
      setTimeout(() => {
        setShowConfetti(false);
        onFinish();  // Trigger the home page display or any other action
      }, 2000); // Confetti will display for 2 seconds
    }, 1500); // Loading duration before confetti starts
  }, [onFinish]);

  return (
    <div className={`loading ${fadeOut ? "fade-out" : ""}`} style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 2s ease-out" }}>
      <div className="logo-container-animation">
        <div className="logo-border">
          <img src="/assets/loading.png" alt="OKY Logo" className="logo-animation" />
        </div>
      </div>
      <div className="text-animation">
        <h2>OKY Webcraft</h2>
      </div>

      {/* Show confetti after the loading screen is finished */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}  // Set height to cover the entire screen
          numberOfPieces={1500}        // Increase the number of pieces for more confetti
          gravity={0.5}                // Adjust gravity for smooth fall
          initialVelocityY={5}         // Adjust initial velocity for smooth falling
          colors={["rgb(196,0,220)", "rgb(224, 0, 131)", "rgb(255, 89, 214)", "rgb(71, 0, 80)", "#0000ff"]}  // Set custom colors for the confetti
        />
      )}
    </div>
  );
};

export default Loading;
