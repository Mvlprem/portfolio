import React from "react";
import { Search, Menu, X, Minus, Square } from "lucide-react";

const TerminalWindow = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-full max-w-[1024px] bg-[#0f0f0f] rounded-lg shadow-2xl border border-white/10 overflow-hidden">
        <div className="h-12 bg-[#000000] flex items-center justify-between px-4 select-none border-b border-black/20">
          {/* Left: Search and Menu Icons */}
          <div className="flex items-center space-x-4">
            <div className="p-1 rounded-sm bg-white/10">
              <Menu
                size={16}
                className="text-gray-400 cursor-default hover:text-white transition-colors"
              />
            </div>
            <div className="p-1 rounded-sm bg-white/10">
              <Search
                size={16}
                className="text-gray-400 cursor-default hover:text-white transition-colors"
              />
            </div>
          </div>

          {/* Middle: Title */}
          <p>Terminal</p>

          {/* Right: Window Controls */}
          <div className="flex items-center space-x-2 w-24">
            <div className="p-1 rounded-full bg-white/10 transition-colors">
              <Minus size={14} className="text-gray-400 hover:text-white" />
            </div>
            <div className="p-1.5 rounded-full bg-white/10 transition-colors">
              <Square size={10} className="text-gray-400 hover:text-white" />
            </div>
            <div className="p-1 rounded-full bg-red-500 transition-colors">
              <X size={14} className="text-white-400" />
            </div>
          </div>
        </div>

        {/* WINDOW CONTENT AREA */}
        <div className="p-6 font-plex text-gray-300 leading-relaxed min-h-[300px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
