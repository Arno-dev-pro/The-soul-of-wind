import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const distributionContent = [
    {
        title: "Autumn Umbrella",
        description: "Peaceful anime scene with traditional Japanese elements",
        image: "/src/assets/360_F_793994473_VD47q7y003VpWwhmjRZV0iS3su02zRya.jpg",
    },
    {
        title: "Gentle Smile",
        description: "Soft and calming character portrait",
        image: "/src/assets/846cd0fae3dff07a325e7c1befa517d2.png",
    },
    {
        title: "Forest Dreams",
        description: "Serene forest scene with sleeping character",
        image: "/src/assets/1328396.png",
    },
    {
        title: "City Rain",
        description: "Modern cityscape with umbrella in rain",
        image: "/src/assets/anh-vd2.79eea92a3c84b9490cc9.jpg",
    },
    {
        title: "Music Journey",
        description: "Girl with headphones in vibrant setting",
        image: "/src/assets/beautiful-anime-6pxtfixyn3ku7622.jpg",
    },
    {
        title: "Nature's Flute",
        description: "Peaceful flute player in nature",
        image: "/src/assets/Deep Sleeping Music.4ff4a7b49a821a6952cd.jpg",
    },
    {
        title: "Countryside Path",
        description: "Beautiful anime countryside landscape",
        image: "/src/assets/desktop-wallpaper-create-anime-backgrounds-style-by-dazzy-dazefiverr-anime-setting.jpg",
    },
    {
        title: "Gentle Rain",
        description: "Atmospheric rain scene with text overlay",
        image: "/src/assets/Piano Music _ Rain Sounds 🌧.2d5b873e64c6de343495.jpg",
    },
    {
        title: "Disney Dreams",
        description: "Magical lamp in starry night",
        image: "/src/assets/Sakura Piano Melodies.5c23237b1ba64d9e6c2f.png",
    },
    {
        title: "Musical Notes",
        description: "Cute anime character with musical elements",
        image: "/src/assets/Sleep,Study,Work.bbcbdfa98c60e03f6c79.jpg",
    },
    {
        title: "Soul of Wind",
        description: "Ethereal scene with wind elements",
        image: "/src/assets/the soul of wind.PNG",
    }
];

const Distribution = () => {
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
                        <button>About Us</button>
                        <button>Contact</button>
                    </div>
                </div>

                {/* Existing Distribution content */}
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Our Content<br />Made Possible By <span className="text-[#E2FF32]">Distributions</span></h1>
                    <p className="text-gray-400 text-lg max-w-2xl mb-12">
                        Our ambient content on YouTube is made possible through the generous support of our distributors. Each contributor helps bring calming atmospheres to millions of viewers worldwide.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-4 gap-6">
                    {distributionContent.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl"
                        >
                            <div className="aspect-square w-full relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Distribution; 