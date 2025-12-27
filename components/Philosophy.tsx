
import React from 'react';
import { philosophyData } from '../constants';
import type { PhilosophyItem } from '../constants';

const PhilosophyCard: React.FC<{item: PhilosophyItem}> = ({ item }) => (
    <div className="flex items-start space-x-6 p-4">
        <div className="flex-shrink-0 bg-gray-800/50 p-3 rounded-full border border-gray-700/50 text-gray-400">
            {item.icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
            <p className="text-gray-400 mt-1">{item.description}</p>
        </div>
    </div>
);

const Philosophy: React.FC = () => {
    return (
        <section id="philosophy" className="py-24">
            <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/20 rounded-3xl p-[1px]">
                <div className="bg-gray-900/80 rounded-[23px] p-8 md:p-12 lg:p-16">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Guiding Principles</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            A synthesis of strategic thinking, systems awareness, and a relentless drive to build and execute with precision.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        {philosophyData.map((item) => (
                            <PhilosophyCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
