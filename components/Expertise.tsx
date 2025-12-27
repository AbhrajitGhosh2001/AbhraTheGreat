
import React from 'react';
import { expertiseData } from '../constants';

const ExpertiseCard: React.FC<{ item: typeof expertiseData[0]; index: number }> = ({ item, index }) => {
    return (
        <div 
            className="border border-gray-800/50 bg-gray-900/30 rounded-3xl flex flex-col items-center text-center transition-all duration-500 p-8 md:p-12 h-full"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
        >
            <div className="mb-6 text-gray-400 transition-colors duration-300">
                {item.icon}
            </div>
            <h3 className="text-4xl font-semibold mb-6 text-gray-200 transition-colors duration-300">{item.title}</h3>
            <ul className="space-y-4 text-xl flex-grow inline-block text-left">
                {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 mr-4 mt-1 text-gray-600 transition-colors duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-300 transition-colors duration-300">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-24">
            <style>
                {`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
            <h2 className="text-5xl font-bold text-center mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Technical Expertise
            </h2>
            <p className="text-2xl text-gray-400 text-center mb-16 max-w-5xl mx-auto">Deep, hands-on expertise across foundational and emergent technology domains.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {expertiseData.map((item, index) => (
                    <ExpertiseCard key={item.title} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Expertise;
