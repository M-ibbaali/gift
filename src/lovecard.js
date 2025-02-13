import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const LoveCard = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHeartClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

 
  
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/AnimatedLove');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff1f2',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        maxWidth: '28rem',
        width: '100%'
      }}>
        <div style={{ position: 'relative' }}>
          <img
            src="./images/face1.PNG"
            alt="Your special someone"
            style={{
              width: '100%',
              height: '16rem',
              objectFit: 'cover',
              borderRadius: '0.5rem'
            }}
          />
          <button
            onClick={handleHeartClick}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              transform: isAnimating ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.3s'
            }}
          >
            <Heart
              style={{
                width: '2rem',
                height: '2rem',
                color: isAnimating ? '#ef4444' : '#f87171',
                fill: isAnimating ? '#ef4444' : 'none'
              }}
            />
          </button>
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '1rem'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            For My Special Someone
          </h1>
          <p style={{
            color: '#4b5563',
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            "In all the world, there is no heart for me like yours.
            In all the world, there is no love for you like mine."
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              style={{
                width: '1.5rem',
                height: '1.5rem',
                color: '#f87171',
                animation: 'bounce 1s infinite',
                animationDelay: `${i * 200}ms`
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNextPage}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#f87171',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            gap: '0.5rem'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#ef4444'}
          onMouseOut={e => e.target.style.backgroundColor = '#f87171'}
        >
          Continue to Next Page
          <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoveCard;