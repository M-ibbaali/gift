// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Heart, ArrowRight , ArrowLeft } from 'lucide-react';

// const LoveLetter = ({ onNavigate }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     setTimeout(() => setShowContent(true), 1000);
//   }, []);
//   const navigate = useNavigate();
//   const handleNextPage = () => {
//     navigate('/Bigheart');
//   };
//   const navigate1 = useNavigate();
//   const handleLastPage = () => {
//     navigate1('/lovecard');
//   };

//   // Generate random starting positions for hearts
//   const generateHearts = (count) => {
//     return Array(count).fill(null).map((_, i) => ({
//       left: `${Math.random() * 100}%`,
//       size: 12 + Math.random() * 20,
//       delay: Math.random() * 5,
//       duration: 5 + Math.random() * 5
//     }));
//   };

//   const floatingHearts = generateHearts(25);
//   const pulsingHearts = generateHearts(20);
//   const fallingHearts = generateHearts(30);

//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#fff1f2',
//       padding: '1rem',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* All your heart animations remain the same */}
//       {floatingHearts.map((heart, i) => (
//         <Heart
//           key={`float-${i}`}
//           style={{
//             position: 'absolute',
//             left: heart.left,
//             top: '-50px',
//             color: '#fecdd3',
//             width: `${heart.size}px`,
//             height: `${heart.size}px`,
//             opacity: 0.6,
//             animation: `float ${heart.duration}s linear infinite`,
//             animationDelay: `${heart.delay}s`
//           }}
//         />
//       ))}

//       {pulsingHearts.map((heart, i) => (
//         <Heart
//           key={`pulse-${i}`}
//           style={{
//             position: 'absolute',
//             left: heart.left,
//             top: `${Math.random() * 100}%`,
//             color: '#fb7185',
//             width: `${heart.size}px`,
//             height: `${heart.size}px`,
//             opacity: 0.4,
//             animation: `pulse ${heart.duration}s ease-in-out infinite`,
//             animationDelay: `${heart.delay}s`
//           }}
//         />
//       ))}

//       {fallingHearts.map((heart, i) => (
//         <Heart
//           key={`fall-${i}`}
//           style={{
//             position: 'absolute',
//             left: heart.left,
//             top: '-50px',
//             color: '#fda4af',
//             width: `${heart.size}px`,
//             height: `${heart.size}px`,
//             opacity: 0.5,
//             animation: `fall ${heart.duration}s linear infinite`,
//             animationDelay: `${heart.delay}s`
//           }}
//         />
//       ))}

//       <div style={{
//         backgroundColor: 'white',
//         borderRadius: '1rem',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         padding: '2rem',
//         maxWidth: '32rem',
//         width: '100%',
//         transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
//         opacity: isVisible ? 1 : 0,
//         transition: 'all 0.8s ease-out',
//         position: 'relative',
//         zIndex: 1
//       }}>
//         {/* Corner hearts decoration */}
//         {[0, 1, 2, 3].map((i) => (
//           <Heart
//             key={`corner-${i}`}
//             style={{
//               position: 'absolute',
//               color: '#f43f5e',
//               width: '24px',
//               height: '24px',
//               opacity: 0.8,
//               animation: 'cornerPulse 2s ease-in-out infinite',
//               animationDelay: `${i * 0.5}s`,
//               ...{
//                 0: { top: '1rem', left: '1rem' },
//                 1: { top: '1rem', right: '1rem' },
//                 2: { bottom: '1rem', left: '1rem' },
//                 3: { bottom: '1rem', right: '1rem' }
//               }[i]
//             }}
//           />
//         ))}

//         <div style={{
//           textAlign: 'center',
//           marginBottom: '2rem'
//         }}>
//           <h1 style={{
//             fontSize: '2rem',
//             color: '#1f2937',
//             marginBottom: '1rem',
//             animation: showContent ? 'fadeIn 1s ease-out' : 'none'
//           }}>
//             My Eyes
//           </h1>
//           <div style={{
//             width: '50px',
//             height: '2px',
//             backgroundColor: '#f87171',
//             margin: '0 auto',
//             animation: showContent ? 'width-expand 1.5s ease-out' : 'none'
//           }} />
//         </div>

//         <div style={{
//           opacity: showContent ? 1 : 0,
//           transform: showContent ? 'translateY(0)' : 'translateY(20px)',
//           transition: 'all 1s ease-out',
//           transitionDelay: '0.5s',
//           lineHeight: '1.8',
//           color: '#4b5563',
//           fontSize: '1.1rem'
//         }}>
//           <p style={{ marginBottom: '1.5rem' }}>
//             Every moment we share together fills my heart with joy and gratitude. Your smile brightens my darkest days, and your love gives me strength I never knew I had.
//           </p>

//           <p style={{ marginBottom: '1.5rem' }}>
//             You are the missing piece that makes my life complete, the melody to my song, and the answer to my prayers. I cherish every laugh we share, every quiet moment, and even the challenges we face together.
//           </p>

//           <p style={{ marginBottom: '1.5rem' }}>
//             With you, I've found a love that grows stronger with each passing day. You are my best friend, my confidant, and my soulmate.
//           </p>

//           <p style={{ textAlign: 'right', fontStyle: 'italic', marginTop: '2rem' }}>
//             Forever Yours,<br />
//             With all my love
//           </p>

//           <button
//             onClick={handleNextPage}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '100%',
//               padding: '1rem',
//               backgroundColor: '#f87171',
//               color: 'white',
//               border: 'none',
//               borderRadius: '0.375rem',
//               fontSize: '1rem',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               gap: '0.5rem',
//               marginTop: '1rem',
//               opacity: showContent ? 1 : 0,
//               transform: showContent ? 'translateY(0)' : 'translateY(20px)'
//             }}
//             onMouseOver={e => e.target.style.backgroundColor = '#ef4444'}
//             onMouseOut={e => e.target.style.backgroundColor = '#f87171'}
//           >
//             Continue to Next Page
//             <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
//           </button>
//           <button
//             onClick={handleLastPage}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '100%',
//               padding: '1rem',
//               backgroundColor: '#f87171',
//               color: 'white',
//               border: 'none',
//               borderRadius: '0.375rem',
//               fontSize: '1rem',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               gap: '0.5rem',
//               marginTop: '1rem',
//               opacity: showContent ? 1 : 0,
//               transform: showContent ? 'translateY(0)' : 'translateY(20px)'
//             }}
//             onMouseOver={e => e.target.style.backgroundColor = '#ef4444'}
//             onMouseOut={e => e.target.style.backgroundColor = '#f87171'}
//           >
//             Last Page
//             <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
//           </button>
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes float {
//             0% {
//               transform: translateY(110vh) rotate(0deg);
//               opacity: 0.6;
//             }
//             100% {
//               transform: translateY(-10vh) rotate(360deg);
//               opacity: 0;
//             }
//           }

//           @keyframes pulse {
//             0% {
//               transform: scale(1);
//               opacity: 0.4;
//             }
//             50% {
//               transform: scale(1.5);
//               opacity: 0.6;
//             }
//             100% {
//               transform: scale(1);
//               opacity: 0.4;
//             }
//           }

//           @keyframes fall {
//             0% {
//               transform: translateY(-50px) rotate(0deg) translateX(0);
//               opacity: 0.5;
//             }
//             50% {
//               transform: translateY(50vh) rotate(180deg) translateX(100px);
//               opacity: 0.8;
//             }
//             100% {
//               transform: translateY(100vh) rotate(360deg) translateX(0);
//               opacity: 0;
//             }
//           }

//           @keyframes cornerPulse {
//             0% {
//               transform: scale(1);
//             }
//             50% {
//               transform: scale(1.2);
//             }
//             100% {
//               transform: scale(1);
//             }
//           }

//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//               transform: translateY(-20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes width-expand {
//             from {
//               width: 0;
//             }
//             to {
//               width: 50px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default LoveLetter;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";

const LoveLetter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowContent(true), 1000);
  }, []);

  return (
    <div className="love-letter-container">
      {/* Floating Hearts */}
      {Array(25)
        .fill(null)
        .map((_, i) => (
          <Heart
            key={`float-${i}`}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${12 + Math.random() * 20}px`,
              height: `${12 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}

      <div className={`love-letter-card ${isVisible ? "visible" : ""}`}>
        {/* Corner Hearts */}
        {[0, 1, 2, 3].map((i) => (
          <Heart
            key={`corner-${i}`}
            className={`corner-heart corner-heart-${i}`}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        <div className="love-letter-header">
          <h1 className={`title ${showContent ? "fade-in" : ""}`}>My Eyes</h1>
          <div className={`divider ${showContent ? "expand" : ""}`} />
        </div>

        <div className={`love-letter-content ${showContent ? "show" : ""}`}>
          <p>
            From the moment you came into my life, everything changed in the
            most beautiful way. You are my sunshine on the darkest days, my
            warmth in the cold, and my peace in the chaos.
            <br /><br />
            Every moment with you is a treasure, every laugh a melody, and every
            touch a spark. I find myself thinking about you constantly <br/>your
            smile, your kindness, and the way your eyes light up when you're
            happy. You make my world brighter, my heart fuller, and my soul
            calmer. 
            <br /><br />On this special day, I just want to remind you how much you
            mean to me. I love you more than words can ever express, and I feel
            so lucky to have you by my side. You are my greatest gift, my love,
            my forever.
          </p>

          <p className="signature">
            Forever Yours,
            <br />
            With all my love
          </p>

          <div className="button-container">
            <button
              onClick={() => navigate("/Bigheart")}
              className="nav-button"
            >
              Next Page
              <ArrowRight className="button-icon" />
            </button>

            <button
              onClick={() => navigate("/lovecard")}
              className="nav-button"
            >
              Previous Page
              <ArrowLeft className="button-icon" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .love-letter-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff1f2;
          padding: 1rem;
          position: relative;
          overflow: hidden;
        }

        .love-letter-card {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 600px;
          width: calc(100% - 2rem);
          transform: translateY(50px);
          opacity: 0;
          transition: all 0.8s ease-out;
          position: relative;
          z-index: 1;
        }

        .love-letter-card.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .floating-heart {
          position: absolute;
          top: -50px;
          color: #fecdd3;
          opacity: 0.6;
          animation: float 5s linear infinite;
        }

        .corner-heart {
          position: absolute;
          width: 24px;
          height: 24px;
          color: #f43f5e;
          opacity: 0.8;
          animation: cornerPulse 2s ease-in-out infinite;
        }

        .corner-heart-0 {
          top: 1rem;
          left: 1rem;
        }
        .corner-heart-1 {
          top: 1rem;
          right: 1rem;
        }
        .corner-heart-2 {
          bottom: 1rem;
          left: 1rem;
        }
        .corner-heart-3 {
          bottom: 1rem;
          right: 1rem;
        }

        .love-letter-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .title {
          font-size: 2rem;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .divider {
          width: 0;
          height: 2px;
          background-color: #f87171;
          margin: 0 auto;
          transition: width 1.5s ease-out;
        }

        .divider.expand {
          width: 50px;
        }

        .love-letter-content {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease-out;
          transition-delay: 0.5s;
        }

        .love-letter-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .love-letter-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.1rem;
        }

        .signature {
          text-align: right;
          font-style: italic;
          margin-top: 2rem;
        }

        .button-container {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-direction: column;
        }

        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 1rem;
          background-color: #f87171;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
          gap: 0.5rem;
        }

        .nav-button:hover {
          background-color: #ef4444;
        }

        .button-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        @keyframes float {
          0% {
            transform: translateY(110vh) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes cornerPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Responsive styles */
        @media (min-width: 768px) {
          .love-letter-card {
            padding: 3rem;
          }

          .button-container {
            flex-direction: row;
          }

          .title {
            font-size: 2.5rem;
          }

          .love-letter-content p {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .love-letter-card {
            padding: 1.5rem;
          }

          .title {
            font-size: 1.75rem;
          }

          .love-letter-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
export default LoveLetter;
