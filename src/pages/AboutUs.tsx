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

                {/* Features Section */}
                <div className="mt-24 mb-12">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">
                        Why Choose The Soul of Wind?
                    </h2>

                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12">
                        <div className="grid grid-cols-4 gap-8">
                            {/* Worldwide Music Distribution */}
                            <div className="group bg-yellow-500/10 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/20
                                hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-white mb-4">Worldwide Music Distribution</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Get your music playing in over 130 digital stores and streaming services across 150+ countries worldwide.
                                    </p>
                                </div>
                            </div>

                            {/* Diversity */}
                            <div className="group bg-cyan-500/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20
                                hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-white mb-4">Diversity</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We collaborate with Artists, Labels and Content Creators. We have engineers and systems ready to support and promote your products, helping partners grow and break through.
                                    </p>
                                </div>
                            </div>

                            {/* Copyright Protection */}
                            <div className="group bg-purple-500/10 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20
                                hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-white mb-4">Copyright Protection</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We make sure to increase your views and revenues, managing and protecting your rights on YouTube, Facebook and some other platforms with a bunch of powerful tools.
                                    </p>
                                </div>
                            </div>

                            {/* Comprehensive Sales Data */}
                            <div className="group bg-pink-500/10 backdrop-blur-md rounded-3xl p-8 border border-pink-500/20
                                hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Sales Data</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Find out exactly where fans are downloading and streaming your music so you can increase marketing efforts and plan tours around those cities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs; 