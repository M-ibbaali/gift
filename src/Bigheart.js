import React from 'react';

const HeartDisplay = () => {
  // Generate small hearts positions
  const smallHearts = Array.from({ length: 40 }).map((_, i) => ({
    style: {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      fontSize: `${Math.random() * 20 + 20}px`,
    }
  }));

  return (
    <div className="page">
      <style>{`
        .page {
          width: 100%;
          height: 100vh;
          background-color: #fff1f2;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .heart-container {
          position: relative;
          font-size: 700px;
          line-height: 1;
          color: red;
          animation: heartbeat 2s infinite ease-in-out;
          filter: drop-shadow(0 0 10px rgba(255,0,0,0.3));
        }

        .name {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
          font-family: Arial, sans-serif;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .small-heart {
          position: absolute;
          color: rgba(255, 0, 0, 0.6);
          bottom: -50px;
          animation: floatUp 4s infinite linear;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-800px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Small floating hearts */}
      {smallHearts.map((heart, index) => (
        <div key={index} className="small-heart" style={heart.style}>
          ❤
        </div>
      ))}

      <div className="heart-container">
        ❤
        <div className="name">Your Name</div>
      </div>
    </div>
  );
};

export default HeartDisplay;