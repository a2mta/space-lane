import React from 'react';

const Footer = () => {
    return (
        <footer className='grid grid-cols-12 gap-10 px-20 mt-72 mb-14'>
            <span className='col-span-2'>Студия из России</span>
            <span className='col-start-6 col-span-2'>Instagram / Telegram</span>
            <span className='col-start-13 col-span-1 text-right'>(c) 2024</span>
        </footer>
    );
};

export default Footer;