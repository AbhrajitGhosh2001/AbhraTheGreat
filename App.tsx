
import React from 'react';
import Header from './components/Header';
import Expertise from './components/Expertise';
import Philosophy from './components/Philosophy';
import Role from './components/Role';
import Connect from './components/Connect';
import Footer from './components/Footer';
import FlowingLinesBackground from './components/FlowingLinesBackground';
import FlowingWavesBackground from './components/FlowingWavesBackground';
import CenterGlowBackground from './components/CenterGlowBackground';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black/50 backdrop-blur-3xl overflow-x-hidden">
            <div className="fixed inset-0 -z-10 h-full w-full bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0)),radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <CenterGlowBackground />
            <FlowingLinesBackground />
            <FlowingWavesBackground />
            <main className="max-w-7xl mx-auto px-6 md:px-12">
                <Header />
                <Expertise />
                <Philosophy />
                <Role />
                <Connect />
                <Footer />
            </main>
        </div>
    );
};

export default App;
