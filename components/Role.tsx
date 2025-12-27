
import React from 'react';
import { roleData } from '../constants';

const Role: React.FC = () => {
    return (
        <section id="role" className="py-24 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">How I Engage</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">My role is to serve as a strategic partner and technical advisor to serious builders.</p>
            <div className="max-w-4xl mx-auto space-y-4">
                {roleData.map((role, index) => (
                    <div key={index} className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 text-left flex items-center">
                         <svg className="w-6 h-6 mr-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-gray-300">{role}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Role;
