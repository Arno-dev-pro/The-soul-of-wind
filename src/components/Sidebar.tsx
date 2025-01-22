import React from 'react';
import { Crown, Heart, ShoppingCart, Menu, Settings, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-black/40 backdrop-blur-md border-r border-white/10 flex flex-col items-center py-6 gap-8">
      <div className="text-purple-500">
        <Crown size={24} />
      </div>
      
      <nav className="flex flex-col gap-6 items-center flex-1">
        <button className="p-2 text-white/60 hover:text-purple-500 transition-colors">
          <Heart size={20} />
        </button>
        <button className="p-2 text-white/60 hover:text-purple-500 transition-colors">
          <ShoppingCart size={20} />
        </button>
        <button className="p-2 text-white/60 hover:text-purple-500 transition-colors">
          <Menu size={20} />
        </button>
      </nav>

      <div className="flex flex-col gap-6">
        <button className="p-2 text-white/60 hover:text-purple-500 transition-colors">
          <Settings size={20} />
        </button>
        <button className="p-2 text-white/60 hover:text-purple-500 transition-colors">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;