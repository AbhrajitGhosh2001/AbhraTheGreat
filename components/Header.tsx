
import React from 'react';

const Header: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Abhra The Great
            </h1>
            <p className="max-w-3xl text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                A systems-level technologist, architect, and strategic builder.
            </p>
             <div className="mt-12">
                <svg className="animate-bounce w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default Header;
