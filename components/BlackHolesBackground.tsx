
import React from 'react';

const BlackHolesBackground: React.FC = () => {
    const holes = [
        { size: '400px', bottom: '-200px', left: '5%', blur: '100px' },
        { size: '300px', bottom: '-150px', left: '30%', blur: '80px' },
        { size: '500px', bottom: '-250px', left: '55%', blur: '120px' },
        { size: '350px', bottom: '-180px', left: '85%', blur: '90px' },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full h-1/2 -z-10 overflow-hidden pointer-events-none">
            {holes.map((hole, index) => (
                <div
                    key={index}
                    className="absolute rounded-full"
                    style={{
                        width: hole.size,
                        height: hole.size,
                        bottom: hole.bottom,
                        left: hole.left,
                        background: 'radial-gradient(circle, rgba(20, 20, 35, 0.4) 0%, rgba(20, 20, 35, 0) 60%)',
                        filter: `blur(${hole.blur})`,
                    }}
                />
            ))}
        </div>
    );
};

export default BlackHolesBackground;
