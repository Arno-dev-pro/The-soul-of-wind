import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutUs = () => {
    const location = useLocation();

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
                        <button>Contact</button>
                    </div>
                </div>

                {/* Split Screen Content */}
                <div className="flex gap-8 h-[calc(100vh-8rem)]">
                    {/* Left Section - Text Content */}
                    <div className="w-1/2 bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                        <div className="h-full flex flex-col justify-center">
                            <h1 className="text-5xl font-bold text-white mb-6">WE ARE THE SOUL OF WIND</h1>
                            <h2 className="text-2xl text-gray-400 mb-8">A digital music distributor with global reach</h2>

                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>
                                    With over seven years of experience in the music industry, our team have
                                    been working as skilled label managers, producers, artists, and
                                    performers, has been instrumental in advancing the careers of numerous
                                    artists, musicians, and YouTube creators.
                                </p>

                                <p>
                                    We bring a wealth of knowledge in music distribution, coupled with over
                                    nine years of expertise in YouTube content creation, to enhance your
                                    visibility and boost your revenue in the music and media content
                                    landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-1/2 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden">
                        <img
                            src="/1000_F_555897563_GYN7F68Xr4zuC7FOOgqAYJyrnQRqqov4.jpg"
                            alt="Neon-lit cyberpunk street scene"
                            className="w-full h-full object-cover"
                            style={{
                                imageRendering: 'crisp-edges'
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs; 