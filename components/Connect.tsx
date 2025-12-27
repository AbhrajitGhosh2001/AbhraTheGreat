
import React from 'react';
import { socialLinks } from '../constants';

const Connect: React.FC = () => {
    return (
        <section id="connect" className="py-24 text-center">
            <h2 className="text-4xl font-bold text-center mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Connect & Collaborate
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
                Reach out to discuss systems, architecture, or potential partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="group flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 p-2"
                    >
                        <span className="p-4 bg-gray-900/50 border border-gray-700/50 rounded-full group-hover:border-gray-300/50 group-hover:bg-gray-800/60 transition-all duration-300 transform group-hover:scale-110">
                           {link.icon}
                        </span>
                        <span className="text-sm">{link.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Connect;
