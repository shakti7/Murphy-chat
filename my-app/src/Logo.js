// Logo.js

import React from 'react';

function Logo() {
    return (
        <img src={`${process.env.PUBLIC_URL}/final_logo.png`} alt="Logo" className="h-40 w-auto absolute top-0 left-0 mt-8 ml-8" />

    );
}

export default Logo