import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GameCard from './components/GameCard';
import IntroOverlay from './components/IntroOverlay';
import IntroAnimation from './components/IntroAnimation';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Distribution from './pages/Distribution';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const heroGames = [
  {
    title: "Rainy Night Ambience",
    description: "Immerse yourself in the calming atmosphere of a rainy evening. Perfect for deep focus and productivity.",
    reviews: 69,
    views: "M",
    image: "/The-soul-of-wind/assets/69M views.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HSOtku1j600"
  },
  {
    title: "Forest Serenity",
    description: "Peaceful forest ambience with gentle rain and nature sounds. Ideal for study sessions and meditation.",
    reviews: 30,
    views: "M",
    image: "/The-soul-of-wind/assets/30M views.jpg",
    videoUrl: "https://www.youtube.com/watch?v=c4s21yGFOdc"
  }
];

const gridGames = [
  {
    title: "Sunset Tranquility",
    description: "Relax with the serene view of a sunset over a calm lake. Perfect for unwinding and reflection.",
    reviews: 5.2,
    views: "M",
    image: "/The-soul-of-wind/assets/360_F_793994473_VD47q7y003VpWwhmjRZV0iS3su02zRya.jpg",
    videoUrl: "https://www.youtube.com/watch?v=hix4zcXkk-k"
  },
  {
    title: "Mystic Moonlight",
    description: "Experience the mystical ambience of a moonlit night. Ideal for meditation and deep thought.",
    reviews: 4.8,
    views: "M",
    image: "/The-soul-of-wind/assets/846cd0fae3dff07a325e7c1befa517d2.png",
    videoUrl: "https://www.youtube.com/watch?v=fdF42hNMHKA"
  },
  {
    title: "Cyber Dreams",
    description: "Immerse yourself in a futuristic cyber world. Great for focus and creative inspiration.",
    reviews: 7.2,
    views: "M",
    image: "/The-soul-of-wind/assets/1328396.png",
    videoUrl: "https://www.youtube.com/watch?v=UAlcjVZWtgc"
  },
  {
    title: "Ethereal Echoes",
    description: "Let the ethereal sounds guide you to a place of peace and tranquility.",
    reviews: 8.9,
    views: "M",
    image: "/The-soul-of-wind/assets/anh-vd2.79eea92a3c84b9490cc9.jpg",
    videoUrl: "https://www.youtube.com/watch?v=SPsX4ATFH9Q"
  }
];

const spotifyPlaylists = [
  {
    title: "Gaming Beats",
    rating: 8.8,
    reviews: 2.1,
    image: "/The-soul-of-wind/assets/beautiful-anime-6pxtfixyn3ku7622.jpg",
    description: "Epic gaming soundtracks to fuel your gameplay.",
    type: "Playlist",
    videoUrl: "https://www.youtube.com/watch?v=dT7XP6ULX6M"
  },
  {
    title: "Cyberpunk Mix",
    rating: 9.1,
    reviews: 3.3,
    image: "/The-soul-of-wind/assets/Deep Sleeping Music.4ff4a7b49a821a6952cd.jpg",
    description: "Synthwave and electronic beats for your cyber adventures.",
    type: "Playlist",
    videoUrl: "https://www.youtube.com/watch?v=0uOwesz0ySY"
  },
  {
    title: "RPG Ambient",
    rating: 8.9,
    reviews: 1.8,
    image: "/The-soul-of-wind/assets/desktop-wallpaper-create-anime-backgrounds-style-by-dazzy-dazefiverr-anime-setting.jpg",
    description: "Atmospheric music for your fantasy RPG sessions.",
    type: "Playlist",
    videoUrl: "https://www.youtube.com/watch?v=VXyA_76lhJw"
  },
  {
    title: "Battle Royale",
    rating: 8.7,
    reviews: 2.5,
    image: "/The-soul-of-wind/assets/hqdefault.jpg",
    description: "High-energy tracks for intense gaming moments.",
    type: "Playlist",
    videoUrl: "https://www.youtube.com/watch?v=A3_LFFg37tc"
  }
];

const artistReleases = [
  {
    title: "Mick Gordon",
    rating: 9.5,
    reviews: 4.2,
    image: "/The-soul-of-wind/assets/Piano Music _ Rain Sounds 🌧.2d5b873e64c6de343495.jpg",
    description: "Latest releases from the DOOM composer.",
    type: "Artist",
    videoUrl: "https://www.youtube.com/watch?v=hmLno7gtQ88"
  },
  {
    title: "HEALTH",
    rating: 9.2,
    reviews: 3.7,
    image: "/The-soul-of-wind/assets/Sakura Piano Melodies.5c23237b1ba64d9e6c2f.png",
    description: "New tracks from Max Payne 3 composers.",
    type: "Artist",
    videoUrl: "https://www.youtube.com/watch?v=AUVHr0_tVOs"
  },
  {
    title: "Jesper Kyd",
    rating: 9.3,
    reviews: 3.9,
    image: "/The-soul-of-wind/assets/Sleep,Study,Work.bbcbdfa98c60e03f6c79.jpg",
    description: "Assassin's Creed composer's latest work.",
    type: "Artist",
    videoUrl: "https://www.youtube.com/watch?v=A3_LFFg37tc"
  },
  {
    title: "Hans Zimmer",
    rating: 9.7,
    reviews: 5.1,
    image: "/The-soul-of-wind/assets/the soul of wind.PNG",
    description: "Epic orchestral game soundtracks.",
    type: "Artist",
    videoUrl: "https://www.youtube.com/watch?v=8S09X3e9d2I"
  }
];

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  const handleVideoError = (e: any) => {
    console.error('Video loading error:', e.target.error);
    // Log the attempted video path
    console.error('Attempted video path:', '/background.mp4');
  };

  const handleVideoPlay = () => {
    console.log('Video started playing');
  };

  return (
    <>
      <IntroAnimation onAnimationComplete={handleAnimationComplete} />
      <div
        className="relative min-h-screen"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1s ease-in',
          display: showContent ? 'block' : 'none'
        }}
      >
        {/* Video Background Container */}
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover transform-gpu brightness-[0.7]"
            style={{
              willChange: 'transform',
            }}
            onLoadedData={(e) => {
              const video = e.target as HTMLVideoElement;
              video.play().catch(error => console.log("Video initial play failed:", error));
            }}
            onEnded={(e) => {
              const video = e.target as HTMLVideoElement;
              if (!video.loop) {
                video.play().catch(error => console.log("Video replay failed:", error));
              }
            }}
          >
            <source src="/The-soul-of-wind/background.mp4" type="video/mp4" />
            {/* Fallback message */}
            Your browser does not support the video tag.
          </video>

          {/* Enhanced darker gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10">
          <Sidebar />
          <Routes>
            <Route path="/" element={
              <main className="pl-24 pr-8 py-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Discover</h1>
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
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="col-span-2">
                    <GameCard {...heroGames[0]} size="large" />
                  </div>
                  <div className="col-span-1">
                    <GameCard {...heroGames[1]} size="large" />
                  </div>
                </div>

                {/* Popular Videos Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Popular Videos</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {gridGames.map((game, index) => (
                      <GameCard key={index} {...game} size="small" />
                    ))}
                  </div>
                </div>

                {/* Spotify Playlists Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Spotify Playlists</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {spotifyPlaylists.map((playlist, index) => (
                      <GameCard key={index} {...playlist} size="small" />
                    ))}
                  </div>
                </div>

                {/* Artist Releases Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Artist Released</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {artistReleases.map((artist, index) => (
                      <GameCard key={index} {...artist} size="small" />
                    ))}
                  </div>
                </div>
              </main>
            } />
            <Route path="/distribution" element={<Distribution />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;