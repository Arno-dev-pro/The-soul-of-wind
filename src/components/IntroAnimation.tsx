import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
    onAnimationComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [isFontLoaded, setIsFontLoaded] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setIsFontLoaded(true);
        });

        const timer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setIsAnimating(false);
                onAnimationComplete();
            }, 800);
        }, 4000);

        return () => clearTimeout(timer);
    }, [onAnimationComplete]);

    if (!isFontLoaded) return null;

    const words = 'The Soul of Wind'.split(' ');

    return isAnimating ? (
        <div className={`intro-animation-container ${isFadingOut ? 'fade-out' : ''}`}>
            <h2 className="intro-text">
                <div className="flex gap-5">
                    {words.map((word, wordIndex) => (
                        <div key={wordIndex} className="overflow-hidden">
                            <span
                                className="intro-word"
                                style={{
                                    animationDelay: `${wordIndex * 0.3}s`
                                }}
                            >
                                {word.split('').map((letter, letterIndex) => (
                                    <span
                                        key={letterIndex}
                                        className="intro-letter"
                                        style={{
                                            animationDelay: `${wordIndex * 0.3 + letterIndex * 0.05}s`
                                        }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </h2>
        </div>
    ) : null;
};

export default IntroAnimation; 