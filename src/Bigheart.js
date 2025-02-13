import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// // const HeartDisplay = () => {
// //   // Generate small hearts positions
// //   const smallHearts = Array.from({ length: 40 }).map((_, i) => ({
// //     style: {
// //       left: `${Math.random() * 100}%`,
// //       animationDelay: `${Math.random() * 3}s`,
// //       fontSize: `${Math.random() * 20 + 20}px`,
// //     }
// //   }));
// //   const navigate = useNavigate();
// //   const handleLastPage = () => {
// //     navigate('/AnimatedLove');
// //   };

// //   return (
// //     <div className="page">
// //       <style>{`
// //         .page {
// //           width: 100%;
// //           height: 100vh;
// //           background-color: #fff1f2;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .heart-container {
// //           position: relative;
// //           font-size: 800px;
// //           line-height: 1;
// //           color: red;
// //           animation: heartbeat 2s infinite ease-in-out;
// //           filter: drop-shadow(0 0 10px rgba(255,0,0,0.3));
// //         }

// //         .name {
// //           position: absolute;
// //           top: 50%;
// //           left: 50%;
// //           transform: translate(-50%, -50%);
// //           color: white;
// //           font-size: 40px;
// //           font-weight: bold;
// //           text-align: center;
// //           font-family: Arial, sans-serif;
// //           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
// //         }

// //         .small-heart {
// //           position: absolute;
// //           color: rgba(255, 0, 0, 0.6);
// //           bottom: -50px;
// //           animation: floatUp 4s infinite linear;
// //         }

// //         @keyframes heartbeat {
// //           0% { transform: scale(1); }
// //           50% { transform: scale(1.05); }
// //           100% { transform: scale(1); }
// //         }

// //         @keyframes floatUp {
// //           0% {
// //             transform: translateY(0) rotate(0deg);
// //             opacity: 1;
// //           }
// //           100% {
// //             transform: translateY(-800px) rotate(360deg);
// //             opacity: 0;
// //           }
// //         }
// //       `}</style>

// //       {/* Small floating hearts */}
// //       {smallHearts.map((heart, index) => (
// //         <div key={index} className="small-heart" style={heart.style}>
// //           ❤
// //         </div>
// //       ))}

// //       <div className="heart-container">
// //         ❤
// //         <div className="name">Your Name</div>
// //       </div>
// //       <div>
// //       <button
// //           onClick={handleLastPage}
// //           style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             width: '100%',
// //             padding: '0.75rem',
// //             backgroundColor: '#f87171',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '0.375rem',
// //             fontSize: '1rem',
// //             fontWeight: '500',
// //             cursor: 'pointer',
// //             transition: 'background-color 0.3s',
// //             gap: '0.5rem'
// //           }}
// //           onMouseOver={e => e.target.style.backgroundColor = '#ef4444'}
// //           onMouseOut={e => e.target.style.backgroundColor = '#f87171'}
// //         >
// //           Continue to Next Page
// //           <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeartDisplay;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const HeartDisplay = () => {
//   const smallHearts = Array.from({ length: 40 }).map((_, i) => ({
//     style: {
//       left: `${Math.random() * 100}%`,
//       animationDelay: `${Math.random() * 3}s`,
//       fontSize: `${Math.random() * 20 + 20}px`,
//     }
//   }));
  
//   const navigate = useNavigate();
//   const handleLastPage = () => {
//     navigate('/AnimatedLove');
//   };

//   return (
//     <div className="page">
//       <style>{`
//         .page {
//           width: 100%;
//           height: 100vh;
//           background-color: #fff1f2;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           align-items: center;
//           padding: 20px;
//         }

//         .main-content {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           width: 100%;
//         }

//         .heart-container {
//           position: relative;
//           font-size: 800px;
//           line-height: 1;
//           color: red;
//           animation: heartbeat 2s infinite ease-in-out;
//           filter: drop-shadow(0 0 10px rgba(255,0,0,0.3));
//         }

//         .name {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           color: white;
//           font-size: 40px;
//           font-weight: bold;
//           text-align: center;
//           font-family: Arial, sans-serif;
//           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
//         }

//         .small-heart {
//           position: absolute;
//           color: rgba(255, 0, 0, 0.6);
//           bottom: -50px;
//           animation: floatUp 4s infinite linear;
//         }

//         .button-container {
//           margin-top: 20px;
//           width: 100%;
//           max-width: 300px;
//           position: relative;
//           z-index: 10;
//         }

//         @keyframes heartbeat {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }

//         @keyframes floatUp {
//           0% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-800px) rotate(360deg);
//             opacity: 0;
//           }
//         }
//       `}</style>

//       {/* Small floating hearts */}
//       {smallHearts.map((heart, index) => (
//         <div key={index} className="small-heart" style={heart.style}>
//           ❤
//         </div>
//       ))}

//       <div className="main-content">
//         <div className="heart-container">
//           ❤
//           <div className="name">Your Name</div>
//         </div>
//       </div>

//       <div className="button-container">
//         <button
//           onClick={handleLastPage}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: '100%',
//             padding: '0.75rem',
//             backgroundColor: '#f87171',
//             color: 'white',
//             border: 'none',
//             borderRadius: '0.375rem',
//             fontSize: '1rem',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//             gap: '0.5rem'
//           }}
//           onMouseOver={e => e.target.style.backgroundColor = '#ef4444'}
//           onMouseOut={e => e.target.style.backgroundColor = '#f87171'}
//         >
//           Last Page
//           <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeartDisplay;

const HeartDisplay = () => {
  const navigate = useNavigate();
  
  return (
    <div className="heart-display-container">
      {/* Floating Hearts */}
      {Array(40).fill(null).map((_, i) => (
        <div
          key={i}
          className="small-heart"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
            animationDelay: `${Math.random() * 3}s`
          }}
        >
          ❤
        </div>
      ))}

      <div className="main-heart-container">
        <div className="big-heart">❤</div>
        <div className="name-overlay">❤Sanae❤</div>
      </div>

      <button onClick={() => navigate('/AnimatedLove')} className="nav-button">
        Last Page
        <ArrowLeft className="button-icon" />
      </button>

      <style jsx>{`
        .heart-display-container {
          min-height: 100vh;
          background-color: #fff1f2;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
        }

        .main-heart-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .big-heart {
          color: red;
          font-size: 200px;
          line-height: 1;
          animation: heartbeat 2s infinite ease-in-out;
          filter: drop-shadow(0 0 10px rgba(255,0,0,0.3));
        }

        .name-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
        }

        .small-heart {
          position: absolute;
          color: rgba(255, 0, 0, 0.6);
          bottom: -50px;
          animation: floatUp 4s infinite linear;
        }

        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background-color: #f87171;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
          max-width: 300px;
          width: 100%;
          margin-top: 2rem;
        }

        .nav-button:hover {
          background-color: #ef4444;
        }

        .button-icon {
          width: 1.25rem;
          height: 1.25rem;
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

        /* Responsive styles */
        @media (min-width: 768px) {
          .big-heart {
            font-size: 400px;
          }

          .name-overlay {
            font-size: 32px;
          }
        }

        @media (min-width: 1024px) {
          .big-heart {
            font-size: 600px;
          }

          .name-overlay {
            font-size: 40px;
          }
        }

        @media (min-width: 1280px) {
          .big-heart {
            font-size: 800px;
          }
        }
      `}</style>
    </div>
  );
};
export default HeartDisplay