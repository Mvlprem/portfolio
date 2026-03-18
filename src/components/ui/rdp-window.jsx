import React from "react";
import { X, Minus, Square, Wifi, BatteryPlus, Power } from "lucide-react";

const RdpWindow = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-full max-w-[1024px] bg-[#0f0f0f] rounded-lg shadow-2xl border border-white/10 overflow-hidden">
        {/* HEADER BAR (Titlebar) */}
        <div className="h-12 bg-[#000000] flex items-center justify-between ps-4 select-none border-b border-black/20">
          {/* Left: Search and Menu Icons */}
          <div className="flex items-center">
            <p className="text-sm">ubuntu-24.04 [Running]</p>
          </div>

          {/* Right: Window Controls */}
          <div className="flex space-x-2 w-24">
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

        {/* PANEL AREA */}
        <div className="font-plex text-gray-300 leading-relaxed">
          <div className="p-2 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* ubuntu logo */}
                <div>
                  <img
                    src="/ubuntu-logo.svg"
                    alt="Ubuntu Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {/* firefox logo */}
                <div>
                  <img
                    src="/firefox-logo.svg"
                    alt="Firefox"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {/* terminal logo */}
                <div>
                  <img
                    src="/terminal.svg"
                    alt="Terminal"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* system icons */}
              <div className="flex items-center space-x-2">
                <div>
                  <Wifi size={24} className="text-black" />
                </div>
                <div>
                  <BatteryPlus size={24} className="text-black" />
                </div>
                <div>
                  <Power size={24} className="text-black" />
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default RdpWindow;
