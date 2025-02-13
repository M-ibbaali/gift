import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight  } from 'lucide-react';

// const LoveCard = () => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleHeartClick = () => {
//     setIsAnimating(true);
//     setTimeout(() => setIsAnimating(false), 1000);
//   };

 
  
//   const navigate = useNavigate();
//   const handleNextPage = () => {
//     navigate('/AnimatedLove');
//   };


//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#fff1f2',
//       padding: '1rem'
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         borderRadius: '0.5rem',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         padding: '1.5rem',
//         maxWidth: '28rem',
//         width: '100%'
//       }}>
//         <div style={{ position: 'relative' }}>
//           <img
//             src="./images/face1.PNG"
//             alt="Your special someone"
//             style={{
//               width: '100%',
//               height: '16rem',
//               objectFit: 'cover',
//               borderRadius: '0.5rem'
//             }}
//           />
//           <button
//             onClick={handleHeartClick}
//             style={{
//               position: 'absolute',
//               top: '1rem',
//               right: '1rem',
//               border: 'none',
//               background: 'none',
//               cursor: 'pointer',
//               transform: isAnimating ? 'scale(1.5)' : 'scale(1)',
//               transition: 'transform 0.3s'
//             }}
//           >
//             <Heart
//               style={{
//                 width: '2rem',
//                 height: '2rem',
//                 color: isAnimating ? '#ef4444' : '#f87171',
//                 fill: isAnimating ? '#ef4444' : 'none'
//               }}
//             />
//           </button>
//         </div>
        
//         <div style={{
//           textAlign: 'center',
//           marginTop: '1rem'
//         }}>
//           <h1 style={{
//             fontSize: '1.5rem',
//             fontWeight: 'bold',
//             color: '#1f2937',
//             marginBottom: '0.5rem'
//           }}>
//             For My Special Someone
//           </h1>
//           <p style={{
//             color: '#4b5563',
//             fontStyle: 'italic',
//             marginBottom: '1rem'
//           }}>
//             "In all the world, there is no heart for me like yours.
//             In all the world, there is no love for you like mine."
//           </p>
//         </div>

//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '0.5rem',
//           marginBottom: '1.5rem'
//         }}>
//           {[...Array(3)].map((_, i) => (
//             <Heart
//               key={i}
//               style={{
//                 width: '1.5rem',
//                 height: '1.5rem',
//                 color: '#f87171',
//                 animation: 'bounce 1s infinite',
//                 animationDelay: `${i * 200}ms`
//               }}
//             />
//           ))}
//         </div>

//         <button
//           onClick={handleNextPage}
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
//           Continue to Next Page
//           <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
//         </button>
//       </div>

//       <style>
//         {`
//           @keyframes bounce {
//             0%, 100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-10px);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default LoveCard;

const LoveCard = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="love-card-container">
      <div className="love-card">
        <div className="image-container">
          <img
            src="./sanae.jpeg"
            alt="Your special someone"
            className="main-image"
          />
          <button
            onClick={handleHeartClick}
            className={`heart-button ${isAnimating ? 'animate' : ''}`}
          >
            <Heart className={`heart-icon ${isAnimating ? 'filled' : ''}`} />
          </button>
        </div>
        
        <div className="card-content">
          <h1 className="card-title">For My Special Someone</h1>
          <p className="card-quote">
            "In all the world, there is no heart for me like yours.
            In all the world, there is no love for you like mine."
          </p>
        </div>

        <div className="bouncing-hearts">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="bouncing-heart"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>

        <button
          onClick={() => navigate('/AnimatedLove')}
          className="nav-button"
        >
          Next Page
          <ArrowRight className="button-icon" />
        </button>
      </div>

      <style jsx>{`
        .love-card-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff1f2;
          padding: 1rem;
        }

        .love-card {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          max-width: 28rem;
          width: 100%;
        }

        .image-container {
          position: relative;
        }

        .main-image {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        .heart-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          border: none;
          background: none;
          cursor: pointer;
          transform: scale(1);
          transition: transform 0.3s;
        }
           .heart-button.animate {
          transform: scale(1.5);
        }

        .heart-icon {
          width: 2rem;
          height: 2rem;
          color: #f87171;
          fill: none;
          transition: all 0.3s;
        }

        .heart-icon.filled {
          color: #ef4444;
          fill: #ef4444;
        }

        .card-content {
          text-align: center;
          margin-top: 1rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .card-quote {
          color: #4b5563;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .bouncing-hearts {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .bouncing-heart {
          width: 1.5rem;
          height: 1.5rem;
          color: #f87171;
          animation: bounce 1s infinite;
        }

        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.75rem;
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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Responsive styles */
        @media (min-width: 768px) {
          .love-card {
            padding: 2rem;
          }

          .main-image {
            height: 20rem;
          }

          .card-title {
            font-size: 1.75rem;
          }

          .card-quote {
            font-size: 1.1rem;
          }

          .bouncing-heart {
            width: 1.75rem;
            height: 1.75rem;
          }

          .nav-button {
            padding: 1rem;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .love-card {
            padding: 1rem;
          }

          .main-image {
            height: 14rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .card-quote {
            font-size: 0.9rem;
          }

          .bouncing-heart {
            width: 1.25rem;
            height: 1.25rem;
          }

          .nav-button {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};
export default LoveCard