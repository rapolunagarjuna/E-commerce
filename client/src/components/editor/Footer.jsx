import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear(); // gets the current year
    return (
        <footer className="flex items-center justify-center text-slate-900 w-full h-fit border-t">
            <div className="flex items-center">
                <span className="mr-1">©</span>
                <span>{year}</span>
                <span className="mx-1">|</span>
                <span className="ml-1">Par-Global</span>
            </div>
            <div className="flex items-center ml-3">
                <span>All Rights Reserved</span>
                <span className="ml-1">®</span>
            </div>
        </footer>
    );
};

export default Footer;
