// LandingPage.js

import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import firebase, { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Marquee.css';  //import your CSS file

function LandingPage() {
    const [user] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <div className="App min-h-screen flex flex-col justify-between items-center pt-6 w-full pr-8 pb-6 relative" style={{ background: '#111', backgroundImage: `url(${process.env.PUBLIC_URL}/back.jpg)`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="marquee absolute top-0 w-full pt-0 mt-[-20px]">
                    <p className="marquee-text text-white text-base italic" data-text="~ Muphy Chat 2.0 Coming soon ~">~ Muphy Chat 2.0 Coming soon ~</p>
                </div>
                <Logo />
                {!user &&
                    <button onClick={signInWithGoogle} className="chat-link text-2xl text-white py-2 px-6 rounded-lg transition duration-150 bg-gray-800 hover:bg-gray-700 absolute right-0 top-1/2 transform -translate-y-1/2 mr-20 flex items-center justify-center">
                        <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Login with Google
                    </button>
                }
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;
