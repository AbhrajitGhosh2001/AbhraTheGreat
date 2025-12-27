
import React from 'react';

const CenterGlowBackground: React.FC = () => {
    return (
        <>
            <style>
                {`
                    @keyframes slow-pulse {
                        0%, 100% {
                            opacity: 0.20;
                            transform: translate(-50%, -50%) scale(1);
                        }
                        50% {
                            opacity: 0.35;
                            transform: translate(-50%, -50%) scale(1.05);
                        }
                    }
                `}
            </style>
            <div
                className="fixed top-1/2 left-1/2 w-[180vw] h-[180vh] -z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(120, 119, 198, 1) 0%, rgba(120, 119, 198, 0) 60%)',
                    filter: 'blur(150px)',
                    animation: 'slow-pulse 12s ease-in-out infinite',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CenterGlowBackground;
