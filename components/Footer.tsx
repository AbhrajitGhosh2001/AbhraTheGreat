
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 text-center text-gray-500 border-t border-gray-800/50">
            <p>&copy; {new Date().getFullYear()} Abhra The Great. All rights reserved.</p>
            <p className="text-sm mt-2">Architecting the future, one system at a time.</p>
        </footer>
    );
};

export default Footer;
