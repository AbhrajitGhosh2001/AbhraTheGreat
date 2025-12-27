
import React from 'react';

const FlowingLinesBackground: React.FC = () => {
    const lines = [
        { left: '10%', duration: '20s', delay: '0s' },
        { left: '20%', duration: '25s', delay: '-5s' },
        { left: '30%', duration: '18s', delay: '-10s' },
        { left: '50%', duration: '22s', delay: '-2s' },
        { left: '70%', duration: '30s', delay: '-15s' },
        { left: '85%', duration: '15s', delay: '-8s' },
        { left: '90%', duration: '28s', delay: '-12s' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <style>
                {`
                    @keyframes flow-lines {
                        0% {
                            transform: translateY(-100vh) rotate(-45deg);
                        }
                        100% {
                            transform: translateY(100vh) rotate(-45deg);
                        }
                    }

                    .line {
                        position: absolute;
                        top: 0;
                        height: 200vh;
                        width: 1px;
                        background: linear-gradient(to bottom, transparent, rgba(120, 119, 198, 0.15), transparent);
                        animation: flow-lines linear infinite;
                    }
                `}
            </style>
            {lines.map((line, index) => (
                <div
                    key={index}
                    className="line"
                    style={{
                        left: line.left,
                        animationDuration: line.duration,
                        animationDelay: line.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FlowingLinesBackground;
