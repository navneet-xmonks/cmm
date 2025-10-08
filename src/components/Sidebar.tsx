'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { RiHome3Line, RiHome3Fill } from 'react-icons/ri';
import { RiCalendarEventLine, RiCalendarEventFill } from 'react-icons/ri';
import { RiSparklingLine, RiSparklingFill } from 'react-icons/ri';
import { RiBookOpenLine, RiBookOpenFill } from 'react-icons/ri';
import { RiPriceTag3Line, RiPriceTag3Fill } from 'react-icons/ri';
import { RiSparklingFill as TbSparkles } from 'react-icons/ri';
import { RiToggleLine, RiToggleFill } from 'react-icons/ri';

const Sidebar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: RiHome3Line,
      activeIcon: RiHome3Fill
    },
    { 
      name: 'Events', 
      href: '/events', 
      icon: RiCalendarEventLine,
      activeIcon: RiCalendarEventFill
    },
    { 
      name: 'Perks', 
      href: '/perks', 
      icon: RiSparklingLine,
      activeIcon: RiSparklingFill
    },
    { 
      name: 'Learn', 
      href: '/learn', 
      icon: RiBookOpenLine,
      activeIcon: RiBookOpenFill
    },
    { 
      name: 'Pricing', 
      href: '/pricing', 
      icon: RiPriceTag3Line,
      activeIcon: RiPriceTag3Fill
    },
  ];

  // Update CSS custom property for layout - Desktop only
  useEffect(() => {
    const updateSidebarWidth = () => {
      if (window.innerWidth >= 768) {
        document.documentElement.style.setProperty('--sidebar-width', isOpen ? '18rem' : '4rem');
      } else {
        // Remove the CSS variable on mobile so it doesn't affect layout
        document.documentElement.style.removeProperty('--sidebar-width');
      }
    };
    
    updateSidebarWidth();
    window.addEventListener('resize', updateSidebarWidth);
    
    return () => window.removeEventListener('resize', updateSidebarWidth);
  }, [isOpen]);

  return (
    <>
      <aside className={`hidden md:flex md:flex-col bg-black border-r border-gray-800 fixed h-screen z-40 transition-all duration-300 ${
        isOpen ? 'md:w-72 translate-x-0' : 'md:w-16 translate-x-0'
      }`}>
        {/* Logo with Toggle */}
        <div className={`p-8 border-b border-gray-800 flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {isOpen && (
            <div className="animate-in fade-in duration-200">
              <h1 className="text-lg font-light text-white mb-1">
                Coaching
              </h1>
              <p className="text-lg font-medium text-gray-400">Mastermind</p>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 rounded-lg hover:bg-gray-800/30`}
          >
            {isOpen ? (
              <RiToggleLine className="text-2xl" />
            ) : (
              <RiToggleFill className="text-3xl" />
            )}
          </button>
        </div>

        {/* Navigation - Centered with breathing space */}
        <nav className="flex-1 flex flex-col justify-center px-3 py-8 space-y-2">
          {navItems.map((item, index) => {
            const isActive = mounted && pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ease-out nav-item-${index}
                  ${isOpen ? 'justify-start' : 'justify-center'}
                  ${isActive 
                    ? 'border border-gray-400/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                    : 'border border-transparent hover:border-gray-600/30'
                  }`}
              >
                {/* Icon with GLOWING effect */}
                <div className="transition-transform duration-300 ease-out group-hover:scale-110">
                  {isActive ? (
                    <Icon className="text-lg transition-all duration-300 text-white filter drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] brightness-125" />
                  ) : (
                    <Icon className="text-lg transition-all duration-300 text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] group-hover:brightness-110" />
                  )}
                </div>
                
                {/* Text with GLOWING effect when active - only show if open */}
                {isOpen && (
                  <>
                    {isActive ? (
                      <span className="font-normal text-base transition-all duration-300 text-white filter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-in fade-in duration-200">
                        {item.name}
                      </span>
                    ) : (
                      <span className="font-normal text-base transition-all duration-300 text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                        {item.name}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Check Eligibility Card - only show if open */}
        {isOpen && (
          <div className="mx-6 mb-6 check-eligibility-card">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/[0.1] rounded-2xl p-4 hover:border-white/[0.15] transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <TbSparkles className="text-blue-400 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-normal text-sm mb-1">Check Eligibility</p>
                  <p className="text-blue-300/80 text-xs font-normal">Score on NEXT month</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Elevate Section - only show if open */}
        {isOpen && (
          <div className="p-8 border-t border-gray-800 elevate-section">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
              <span className="tracking-[0.2em] uppercase font-normal">Elevate</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
