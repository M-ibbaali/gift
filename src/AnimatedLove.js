
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const LoveLetter = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowContent(true), 1000);
  }, []);
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/Bigheart');
  };

  // Generate random starting positions for hearts
  const generateHearts = (count) => {
    return Array(count).fill(null).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      size: 12 + Math.random() * 20,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5
    }));
  };

  const floatingHearts = generateHearts(25);
  const pulsingHearts = generateHearts(20);
  const fallingHearts = generateHearts(30);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff1f2',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* All your heart animations remain the same */}
      {floatingHearts.map((heart, i) => (
        <Heart
          key={`float-${i}`}
          style={{
            position: 'absolute',
            left: heart.left,
            top: '-50px',
            color: '#fecdd3',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: 0.6,
            animation: `float ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`
          }}
        />
      ))}

      {pulsingHearts.map((heart, i) => (
        <Heart
          key={`pulse-${i}`}
          style={{
            position: 'absolute',
            left: heart.left,
            top: `${Math.random() * 100}%`,
            color: '#fb7185',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: 0.4,
            animation: `pulse ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`
          }}
        />
      ))}

      {fallingHearts.map((heart, i) => (
        <Heart
          key={`fall-${i}`}
          style={{
            position: 'absolute',
            left: heart.left,
            top: '-50px',
            color: '#fda4af',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: 0.5,
            animation: `fall ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`
          }}
        />
      ))}

      <div style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        maxWidth: '32rem',
        width: '100%',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Corner hearts decoration */}
        {[0, 1, 2, 3].map((i) => (
          <Heart
            key={`corner-${i}`}
            style={{
              position: 'absolute',
              color: '#f43f5e',
              width: '24px',
              height: '24px',
              opacity: 0.8,
              animation: 'cornerPulse 2s ease-in-out infinite',
              animationDelay: `${i * 0.5}s`,
              ...{
                0: { top: '1rem', left: '1rem' },
                1: { top: '1rem', right: '1rem' },
                2: { bottom: '1rem', left: '1rem' },
                3: { bottom: '1rem', right: '1rem' }
              }[i]
            }}
          />
        ))}

        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '2rem',
            color: '#1f2937',
            marginBottom: '1rem',
            animation: showContent ? 'fadeIn 1s ease-out' : 'none'
          }}>
            My Dearest
          </h1>
          <div style={{
            width: '50px',
            height: '2px',
            backgroundColor: '#f87171',
            margin: '0 auto',
            animation: showContent ? 'width-expand 1.5s ease-out' : 'none'
          }} />
        </div>

        <div style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease-out',
          transitionDelay: '0.5s',
          lineHeight: '1.8',
          color: '#4b5563',
          fontSize: '1.1rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Every moment we share together fills my heart with joy and gratitude. Your smile brightens my darkest days, and your love gives me strength I never knew I had.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            You are the missing piece that makes my life complete, the melody to my song, and the answer to my prayers. I cherish every laugh we share, every quiet moment, and even the challenges we face together.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            With you, I've found a love that grows stronger with each passing day. You are my best friend, my confidant, and my soulmate.
          </p>

          <p style={{ textAlign: 'right', fontStyle: 'italic', marginTop: '2rem' }}>
            Forever Yours,<br />
            With all my love
          </p>

          <button
            onClick={handleNextPage}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '1rem',
              backgroundColor: '#f87171',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              gap: '0.5rem',
              marginTop: '1rem',
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(20px)'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#ef4444'}
            onMouseOut={e => e.target.style.backgroundColor = '#f87171'}
          >
            Continue to Next Page
            <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
        </div>
      </div>

      <style>
        {`
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

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.4;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.6;
            }
            100% {
              transform: scale(1);
              opacity: 0.4;
            }
          }

          @keyframes fall {
            0% {
              transform: translateY(-50px) rotate(0deg) translateX(0);
              opacity: 0.5;
            }
            50% {
              transform: translateY(50vh) rotate(180deg) translateX(100px);
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh) rotate(360deg) translateX(0);
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

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes width-expand {
            from {
              width: 0;
            }
            to {
              width: 50px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoveLetter;