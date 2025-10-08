'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { IoHomeOutline, IoHome } from 'react-icons/io5';
import { MdOutlineEventNote, MdEventNote } from 'react-icons/md';
import { IoSparklesOutline, IoSparkles } from 'react-icons/io5';
import { IoBookOutline, IoBook } from 'react-icons/io5';
import { IoPricetagOutline, IoPricetag } from 'react-icons/io5';

const BottomNav = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: IoHomeOutline,
      activeIcon: IoHome
    },
    { 
      name: 'Events', 
      href: '/events', 
      icon: MdOutlineEventNote,
      activeIcon: MdEventNote
    },
    { 
      name: 'Perks', 
      href: '/perks', 
      icon: IoSparklesOutline,
      activeIcon: IoSparkles
    },
    { 
      name: 'Learn', 
      href: '/learn', 
      icon: IoBookOutline,
      activeIcon: IoBook
    },
    { 
      name: 'Pricing', 
      href: '/pricing', 
      icon: IoPricetagOutline,
      activeIcon: IoPricetag
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/[0.08] z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = mounted && pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 flex-1 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Icon className="text-xl" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
