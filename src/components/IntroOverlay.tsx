import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const IntroOverlay = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showText, setShowText] = useState(false);

    const text = "The Soul of Wind";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            }
        }
    };

    useEffect(() => {
        if (imageLoaded) {
            const textTimer = setTimeout(() => {
                setShowText(true);
            }, 1500);

            const exitTimer = setTimeout(() => {
                setShowText(false);
                setTimeout(() => setShowOverlay(false), 1500);
            }, 5000);

            return () => {
                clearTimeout(textTimer);
                clearTimeout(exitTimer);
            };
        }
    }, [imageLoaded]);

    return (
        <AnimatePresence>
            {showOverlay && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 1.5,
                            ease: "easeInOut"
                        }
                    }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
                        animate={{
                            clipPath: 'circle(100% at 50% 50%)',
                            opacity: 1,
                            transition: {
                                clipPath: {
                                    duration: 1.5,
                                    ease: [0.76, 0, 0.24, 1]
                                },
                                opacity: {
                                    duration: 0.3
                                }
                            }
                        }}
                        className="w-full h-full relative"
                    >
                        <img
                            src="/src/assets/the soul of wind.PNG"
                            alt="Soul of Wind"
                            onLoad={() => setImageLoaded(true)}
                            className="w-full h-full object-cover"
                        />

                        <AnimatePresence>
                            {showText && (
                                <motion.div
                                    className="absolute top-[15%] left-[10%]" // Positioned where red box was
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <div className="flex">
                                        {text.split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                variants={letterVariants}
                                                className="text-4xl font-serif text-white tracking-widest inline-block"
                                            >
                                                {char === ' ' ? '\u00A0' : char}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroOverlay; 