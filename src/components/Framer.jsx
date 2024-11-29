import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';

const Framer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const examples = [
    {
      title: "1. Basic Fade In",
      component: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 bg-blue-500 rounded-lg"
        />
      )
    },
    {
      title: "2. Scale & Rotate",
      component: (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 bg-green-500 rounded-lg"
        />
      )
    },
    {
      title: "3. Hover Effect",
      component: (
        <motion.div
          whileHover={{ scale: 1.9 }}
          whileTap={{ scale: 0.9 }}
          className="w-32 h-32 bg-pink-500 rounded-lg cursor-pointer"
        />
      )
    },
    {
      title: "4. Spring Animation",
      component: (
        <motion.div
          animate={{ 
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity
          }}
          className="w-32 h-32 bg-yellow-500"
        />
      )
    },
    {
      title: "5. Drag & Drop",
      component: (
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className="w-32 h-32 bg-red-500 rounded-lg cursor-move"
        />
      )
    },
    {
      title: "6. Staggered Children",
      component: (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            }
          }}
          className="flex gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="w-8 h-8 bg-indigo-500 rounded"
            />
          ))}
        </motion.div>
      )
    },
    {
      title: "7. Page Transition",
      component: (
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="w-32 h-32 bg-orange-500 rounded-lg"
          />
        </AnimatePresence>
      )
    },
    {
      title: "8. Gesture Animation",
      component: (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className="w-32 h-32 bg-pink-500 rounded-lg cursor-pointer"
        />
      )
    },
    {
      title: "9. Infinite Loop",
      component: (
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 bg-teal-500 rounded-lg"
        />
      )
    },
    {
      title: "10. Path Animation",
      component: (
        <svg width="128" height="128" viewBox="0 0 128 128">
          <motion.circle
            cx="64"
            cy="64"
            r="32"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      )
    },



    {
      title: "11. Parallax Scroll",
      component: (
        <motion.div className="relative h-64 overflow-hidden rounded-lg">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ y: useTransform(useMotionValue(0), [0, 1], [0, -50]) }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
            style={{ y: useTransform(useMotionValue(0), [0, 1], [0, -20]) }}
          >
            Parallax Effect
          </motion.div>
        </motion.div>
      )
    },
    {
      title: "12. Magnetic Button",
      component: (() => {
        const MagneticButton = () => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          
          const handleMouse = (event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            const mouseX = event.clientX - bounds.left;
            const mouseY = event.clientY - bounds.top;
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;
            
            x.set((mouseX - centerX) / 5);
            y.set((mouseY - centerY) / 5);
          };

          return (
            <motion.button
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
              animate={{ x, y }}
              onMouseMove={handleMouse}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
            >
              Hover me
            </motion.button>
          );
        };
        return <MagneticButton />;
      })()
    },
    {
      title: "13. 3D Card Tilt",
      component: (() => {
        const Card3D = () => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          
          const rotateX = useTransform(y, [-100, 100], [30, -30]);
          const rotateY = useTransform(x, [-100, 100], [-30, 30]);

          return (
            <motion.div
              className="w-64 h-96 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl"
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                3D Card
              </div>
            </motion.div>
          );
        };
        return <Card3D />;
      })()
    },
    {
      title: "14. Morphing Shape",
      component: (
        <motion.div
          className="w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500"
          animate={{
            borderRadius: ["0%", "50%", "50%", "0%"],
            rotate: [0, 270, 270, 0],
            scale: [1, 1.2, 1.2, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            repeat: Infinity
          }}
        />
      )
    },
    {
      title: "15. Wave Text Animation",
      component: (() => {
        const text = "Wave Effect";
        return (
          <motion.div className="flex space-x-1 text-2xl font-bold">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [-10, 0, -10],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        );
      })()
    },
    {
      title: "16. Sequence Animation",
      component: (() => {
        const controls = useAnimation();
        
        return (
          <div className="space-y-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={async () => {
                await controls.start({ scale: 1.5 });
                await controls.start({ rotate: 180 });
                await controls.start({ borderRadius: "50%" });
                await controls.start({ scale: 1, rotate: 0, borderRadius: "0%" });
              }}
            >
              Play Sequence
            </button>
            <motion.div
              className="w-32 h-32 bg-blue-500"
              animate={controls}
            />
          </div>
        );
      })()
    },
    {
      title: "17. Circular Progress",
      component: (() => {
        const [progress, setProgress] = useState(0);
        
        return (
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-blue-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress }}
                transition={{ duration: 0.5 }}
                style={{
                  rotate: -90,
                  originX: 0.5,
                  originY: 0.5,
                }}
              />
            </svg>
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setProgress(progress >= 1 ? 0 : progress + 0.2)}
            >
              {Math.round(progress * 100)}%
            </button>
          </div>
        );
      })()
    },
    {
      title: "18. Shared Layout Animation",
      component: (() => {
        const [selected, setSelected] = useState(false);
        
        return (
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              layout
              className={`bg-purple-500 rounded-lg cursor-pointer ${
                selected ? "col-span-2 h-64" : "h-32"
              }`}
              onClick={() => setSelected(!selected)}
              transition={{ duration: 0.5 }}
            />
            <motion.div layout className="h-32 bg-purple-300 rounded-lg" />
            <motion.div layout className="h-32 bg-purple-300 rounded-lg" />
          </div>
        );
      })()
    },
    {
      title: "19. Draggable Constraints",
      component: (
        <div className="relative w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg">
          <motion.div
            className="absolute w-16 h-16 bg-red-500 rounded-lg cursor-move"
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 48,
              bottom: 48,
            }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.2 }}
          />
        </div>
      )
    },
    // {
    //   title: "20. Follow Pointer",
    //   component: (() => {
    //     const x = useMotionValue(0);
    //     const y = useMotionValue(0);
        
    //     const handleMouseMove = (event) => {
    //       const rect = event.currentTarget.getBoundingClientRect();
    //       x.set(event.clientX - rect.left - 25);
    //       y.set(event.clientY - rect.top - 25);
    //     };


    {
        title: "21. Floating Cards Stack",
        component: (() => {
          const cards = [1, 2, 3, 4];
          return (
            <div className="relative w-64 h-64">
              {cards.map((card, i) => (
                <motion.div
                  key={card}
                  className="absolute w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl"
                  animate={{
                    y: [-10 - i * 5, 10 - i * 5],
                    rotate: [i * 2, -i * 2],
                    scale: 1 - i * 0.05,
                  }}
                  initial={{
                    y: -10 - i * 5,
                    rotate: i * 2,
                    scale: 1 - i * 0.05,
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3 + i * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    zIndex: cards.length - i,
                  }}
                />
              ))}
            </div>
          );
        })()
      },
      {
        title: "22. Liquid Button",
        component: (() => {
          const LiquidButton = () => {
            const buttonRef = useRef();
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <motion.button
                ref={buttonRef}
                className="relative px-8 py-4 bg-blue-500 text-white rounded-lg overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-600"
                  initial={false}
                  animate={{
                    scale: isHovered ? 2 : 0,
                    borderRadius: isHovered ? "40%" : "100%",
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                />
                <span className="relative z-10">Hover Me</span>
              </motion.button>
            );
          };
          return <LiquidButton />;
        })()
      },
      {
        title: "23. Expanding Navigation",
        component: (() => {
          const [isOpen, setIsOpen] = useState(false);
          const navItems = ["Home", "About", "Services", "Contact"];
          
          return (
            <motion.nav
              className="bg-gray-800 text-white rounded-lg overflow-hidden"
              animate={{
                width: isOpen ? 200 : 64,
              }}
            >
              <motion.button
                className="w-16 h-16 flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ☰
              </motion.button>
              <motion.ul
                className="px-4 pb-4"
                animate={{
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    className="py-2 cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          );
        })()
      },
      {
        title: "24. Particle Explosion",
        component: (() => {
          const ParticleExplosion = () => {
            const [isExploded, setIsExploded] = useState(false);
            const particles = Array.from({ length: 12 });
            
            return (
              <div className="relative">
                <motion.button
                  className="px-6 py-3 bg-red-500 text-white rounded-lg"
                  onClick={() => setIsExploded(true)}
                  animate={{
                    scale: isExploded ? 0 : 1,
                    opacity: isExploded ? 0 : 1,
                  }}
                >
                  Click to Explode
                </motion.button>
                
                {isExploded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {particles.map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-red-500 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: [1, 0],
                          x: [0, Math.cos(i * 30 * (Math.PI / 180)) * 100],
                          y: [0, Math.sin(i * 30 * (Math.PI / 180)) * 100],
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        onAnimationComplete={() => setIsExploded(false)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          };
          return <ParticleExplosion />;
        })()
      },
      {
        title: "25. Custom Cursor",
        component: (() => {
          const CustomCursor = () => {
            const cursorX = useMotionValue(-100);
            const cursorY = useMotionValue(-100);
            
            const springConfig = { damping: 25, stiffness: 700 };
            const cursorXSpring = useSpring(cursorX, springConfig);
            const cursorYSpring = useSpring(cursorY, springConfig);
  
            return (
              <div
                className="relative w-64 h-64 bg-gray-100 rounded-lg"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  cursorX.set(e.clientX - rect.left - 25);
                  cursorY.set(e.clientY - rect.top - 25);
                }}
                onMouseLeave={() => {
                  cursorX.set(-100);
                  cursorY.set(-100);
                }}
              >
                <motion.div
                  className="absolute w-44 h-44 border-2 border-pink-500 rounded-full"
                  style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                  }}
                />
              </div>
            );
          };
          return <CustomCursor />;
        })()
      },
      {
        title: "26. Carousel Slider",
        component: (() => {
          const Carousel = () => {
            const [currentIndex, setCurrentIndex] = useState(0);
            const slides = [
              "bg-red-500",
              "bg-blue-500",
              "bg-green-500",
              "bg-yellow-500"
            ];
  
            return (
              <div className="relative w-64 h-48 overflow-hidden rounded-lg">
                <motion.div
                  className="flex h-full"
                  animate={{ x: -currentIndex * 256 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  {slides.map((color, i) => (
                    <div
                      key={i}
                      className={`flex-shrink-0 w-64 h-48 ${color}`}
                    />
                  ))}
                </motion.div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, i) => (
                    <motion.button
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        currentIndex === i ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentIndex(i)}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            );
          };
          return <Carousel />;
        })()
      },
      {
        title: "27. Scroll Progress",
        component: (() => {
          const ScrollProgress = () => {
            const { scrollYProgress } = useScroll();
            
            return (
              <div className="relative w-64 h-64 overflow-y-auto">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-green-500 origin-left"
                  style={{ scaleX: scrollYProgress }}
                />
                <div className="p-4 space-y-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 bg-gray-200 rounded"
                    />
                  ))}
                </div>
              </div>
            );
          };
          return <ScrollProgress />;
        })()
      },
      {
        title: "28. Accordion Menu",
        component: (() => {
          const AccordionItem = ({ title, content }) => {
            const [isOpen, setIsOpen] = useState(false);
            
            return (
              <div className="border rounded-lg overflow-hidden">
                <motion.button
                  className="w-full px-4 py-2 text-left bg-gray-100"
                  onClick={() => setIsOpen(!isOpen)}
                  whileHover={{ backgroundColor: "#e5e7eb" }}
                >
                  {title}
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4">{content}</div>
                </motion.div>
              </div>
            );
          };
  
          return (
            <div className="w-64 space-y-2">
              <AccordionItem
                title="Section 1"
                content="Content for section 1"
              />
              <AccordionItem
                title="Section 2"
                content="Content for section 2"
              />
            </div>
          );
        })()
      },
      {
        title: "29. Typing Cursor",
        component: (() => {
          const TypingCursor = () => {
            return (
              <div className="flex items-center text-2xl font-mono">
                <span>Hello</span>
                <motion.div
                  className="w-0.5 h-6 bg-black ml-0.5"
                  animate={{
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            );
          };
          return <TypingCursor />;
        })()
      },
      {
        title: "30. Loading Spinner",
        component: (
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )
      }



  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-lg font-bold mb-8">Framer Motion reusable components </h1>
      <h1 className="text-lg font-bold mb-8">i built while learning </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {examples.map((example, index) => (
          <div 
            key={example.title}
            className="p-6 border rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4">{example.title}</h2>
            <div className="flex items-center justify-center min-h-[200px] bg-gray-50 rounded-lg">
              {example.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Framer;













