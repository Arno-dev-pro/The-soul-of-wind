import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
    const location = useLocation();

    return (
        <main className="pl-24 pr-8 py-8">
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
                    <button>About Us</button>
                    <button>Contact</button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-12">Our Services</h1>

                {/* Main service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Music Promotion Card */}
                    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                        transition-all duration-300 hover:bg-gradient-to-br from-emerald-500/20 to-purple-500/20 
                        hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10
                        relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">MUSIC PROMOTION</h2>
                            <ul className="space-y-4 text-gray-300 group-hover:text-white/90">
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Get chance to promote your music in our channel system
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Reach your Music to 150+ Countries, millions of people in over the World
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Increase your fan base with a suite of promotional and marketing services.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Digital Distribution Card */}
                    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                        transition-all duration-300 hover:bg-gradient-to-br from-emerald-500/20 to-purple-500/20 
                        hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10
                        relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">DIGITAL DISTRIBUTION</h2>
                            <ul className="space-y-4 text-gray-300 group-hover:text-white/90">
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Stream and sell your music on over 130 digital stores like Spotify, iTunes, Deezer, Beatport and many others.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Gain access to our dashboard for managing your music Catalogs.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Upload your music with quick access and an easy to use release creation system.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Content ID Card */}
                    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                        transition-all duration-300 hover:bg-gradient-to-br from-emerald-500/20 to-purple-500/20 
                        hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10
                        relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">CONTENT ID</h2>
                            <ul className="space-y-4 text-gray-300 group-hover:text-white/90">
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Musicians, Labels and Right Holders are able to automatically claim, manage, protect and monetize their content uploaded by third parties on YouTube.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Support & Advice Card */}
                    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                        transition-all duration-300 hover:bg-gradient-to-br from-emerald-500/20 to-purple-500/20 
                        hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10
                        relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">SUPPORT & ADVICE</h2>
                            <ul className="space-y-4 text-gray-300 group-hover:text-white/90">
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    We're here to provide support and professional advice to help you get the most from promoting and selling your music online.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Take Control Card */}
                    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                        transition-all duration-300 hover:bg-gradient-to-br from-emerald-500/20 to-purple-500/20 
                        hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10
                        relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">TAKE CONTROL</h2>
                            <ul className="space-y-4 text-gray-300 group-hover:text-white/90">
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Use our online system to manage your catalogue, distribute your music and view your latest sales.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Monthly Payout Card */}
                    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                        transition-all duration-300 hover:bg-gradient-to-br from-emerald-500/20 to-purple-500/20 
                        hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10
                        relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">MONTHLY PAYOUT</h2>
                            <ul className="space-y-4 text-gray-300 group-hover:text-white/90">
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    You receive 90% of the revenue we collect, we only charge 10% royalties.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    No upfront or hidden costs
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500 group-hover:text-emerald-400">■</span>
                                    Get paid every month without any delays from PayPal or Bank Transfer!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Services;

<style jsx>{`
    .services-container {
        position: relative;
    }
    
    .services-container::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at top right, rgba(74, 222, 128, 0.1), transparent 40%),
                    radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.1), transparent 40%);
        pointer-events: none;
        z-index: -1;
    }
`}</style> 