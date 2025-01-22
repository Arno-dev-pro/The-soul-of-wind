import React from 'react';

interface GameCardProps {
  title: string;
  description: string;
  reviews: number;
  views?: string;
  image: string;
  size?: 'large' | 'small';
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  reviews,
  views = 'k',
  image,
  size = 'small',
}) => {
  const isLarge = size === 'large';

  return (
    <div className={`relative group ${isLarge ? 'h-[500px] rounded-2xl hero-card-animated' : 'aspect-[1/1.2] rounded-lg'
      }`}>
      <div className="hero-card-content overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-[1]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Curved Corner with Views - Only for hero cards */}
        {isLarge && (
          <div className="absolute top-0 left-0 z-[2]">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="opacity-95">
              <path
                d="M0 0H160V100C160 133.137 133.137 160 100 160H0V0Z"
                className="fill-black/40 backdrop-blur-md"
              />
            </svg>
            <div className="absolute top-6 left-6 text-white">
              <div className="text-4xl font-bold tracking-tight">{reviews}{views}</div>
              <div className="text-sm font-medium text-white/80">views</div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
          <h3 className={`font-bold text-white mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>{title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center gap-4">
            {!isLarge && (
              <span className="text-white/60 text-sm">{reviews}{views} views</span>
            )}
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;