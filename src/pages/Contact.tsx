import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import mailAnimation from '/mail-letter.json'; // Make sure the path is correct

const Contact = () => {
    const location = useLocation();

    const lottieOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <main className="pl-24 pr-8 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Navigation */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-6 text-white/60">
                        <Link to="/" className="hover:text-purple-500 transition-colors">
                            <button className={location.pathname === '/' ? 'text-purple-500' : ''}>Home</button>
                        </Link>
                        <Link to="/distribution" className="hover:text-purple-500 transition-colors">
                            <button className={location.pathname === '/distribution' ? 'text-purple-500' : ''}>Distribution</button>
                        </Link>
                        <Link to="/services" className="hover:text-purple-500 transition-colors">
                            <button className={location.pathname === '/services' ? 'text-purple-500' : ''}>Services</button>
                        </Link>
                        <Link to="/about" className="hover:text-purple-500 transition-colors">
                            <button className={location.pathname === '/about' ? 'text-purple-500' : ''}>About Us</button>
                        </Link>
                        <Link to="/contact" className="hover:text-purple-500 transition-colors">
                            <button className={location.pathname === '/contact' ? 'text-purple-500' : ''}>Contact</button>
                        </Link>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Section - Lottie Animation */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden relative h-[550px] flex items-center justify-center">
                        <div className="w-full h-full max-w-[400px] mx-auto">
                            <Lottie
                                animationData={mailAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: '100%' }}
                                className="scale-125"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 h-[550px]">
                        <p className="text-gray-300 mb-6">
                            Fill in this form to get more information. We'll contact you within 24 hours.
                        </p>
                        <form className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Company"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Phone No."
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Country"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="City"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Catalogue Size"
                                />
                            </div>
                            <div>
                                <textarea
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 h-20"
                                    placeholder="Describly your catalog briefly"
                                ></textarea>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 px-6 py-2 border border-pink-500 text-white rounded-lg hover:bg-pink-500/10 transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Send Now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact; 