
import React from 'react';

const FlowingWavesBackground: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[25vh] max-h-[250px] -z-10 overflow-hidden pointer-events-none">
            <style>
                {`
                    @keyframes flow-wave {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .wave-container {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 200%;
                        height: 100%;
                        animation: flow-wave linear infinite;
                    }
                `}
            </style>
            
            {/* Wave 1 */}
            <div className="wave-container" style={{ animationDuration: '35s', opacity: 0.1 }}>
                <svg viewBox="0 0 2880 150" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <path d="M0,50 C360,150 1080,-50 1440,50 C1800,150 2520,-50 2880,50 V150 H0 Z" fill="rgba(120, 119, 198, 1)"></path>
                </svg>
            </div>
            
            {/* Wave 2 */}
            <div className="wave-container" style={{ animationDuration: '45s', opacity: 0.08, animationDirection: 'reverse' }}>
                 <svg viewBox="0 0 2880 150" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <path d="M0,50 C360,0 1080,100 1440,50 C1800,0 2520,100 2880,50 V150 H0 Z" fill="rgba(120, 119, 198, 1)"></path>
                </svg>
            </div>

            {/* Wave 3 */}
            <div className="wave-container" style={{ animationDuration: '55s', opacity: 0.06 }}>
                <svg viewBox="0 0 2880 150" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <path d="M0,80 C480,30 960,130 1440,80 C1920,30 2400,130 2880,80 V150 H0 Z" fill="rgba(120, 119, 198, 1)"></path>
                </svg>
            </div>
        </div>
    );
};

export default FlowingWavesBackground;
