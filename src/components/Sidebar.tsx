import React from 'react';
import { Crown, Store, Wrench, Users, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-black/40 backdrop-blur-md border-r border-white/10 flex flex-col items-center py-6 gap-8">
      <Link to="/" className={`${location.pathname === '/' ? 'text-purple-500' : 'text-white/60 hover:text-purple-500'} transition-colors`}>
        <Crown size={24} />
      </Link>

      <nav className="flex flex-col gap-6 items-center flex-1">
        <Link to="/distribution" className={`p-2 ${location.pathname === '/distribution' ? 'text-purple-500' : 'text-white/60 hover:text-purple-500'} transition-colors`}>
          <Store size={20} />
        </Link>
        <Link to="/services" className={`p-2 ${location.pathname === '/services' ? 'text-purple-500' : 'text-white/60 hover:text-purple-500'} transition-colors`}>
          <Wrench size={20} />
        </Link>
        <Link to="/about" className={`p-2 ${location.pathname === '/about' ? 'text-purple-500' : 'text-white/60 hover:text-purple-500'} transition-colors`}>
          <Users size={20} />
        </Link>
      </nav>

      <Link to="/contact" className={`p-2 ${location.pathname === '/contact' ? 'text-purple-500' : 'text-white/60 hover:text-purple-500'} transition-colors`}>
        <MessageSquare size={20} />
      </Link>
    </div>
  );
};

export default Sidebar;