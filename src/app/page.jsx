import Globe from "@/components/ui/globe";
import ClientInfo from "@/components/client-info";
import { Terminal } from "@/components/terminal";
import TerminalWindow from "@/components/ui/terminal-window";
import Desktop from "@/components/ui/desktop";
import RdpWindow from "@/components/ui/rdp-window";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col xl:items-center p-6 antialiased">
        <div className="relative p-6 max-w-[1096px]">
          {/* corner l - Brackets */}
          <div className="hud-corner corner-tl" />
          <div className="hud-corner corner-tr" />
          <div className="hud-corner corner-bl" />
          <div className="hud-corner corner-br" />

          <ClientInfo />

          {/* hero headline */}
          <div className="flex flex-col-reverse md:flex-row md:items-end justify-center mt-12 md:mt-0 w-full gap-10 ">
            <div className="flex flex-col items-start text-left">
              <h1 className="font-druk text-6xl md:text-7xl lg:text-[120px] tracking-tighter leading-[0.85] uppercase">
                Hi, <br />
                I'm <br />
                Prem
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-green-500/50" />
                <p className="font-plex text-[10px] md:text-xs tracking-[0.4em] text-green-500/90 uppercase">
                  SOC_Analyst
                </p>
              </div>
            </div>

            {/* rotating globe */}
            <div className="relative flex items-center justify-center w-72 h-72 lg:w-[450px] lg:h-[450px] overflow-hidden">
              <Globe />
            </div>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="px-0 md:px-6">
        <TerminalWindow>
          <Terminal />
        </TerminalWindow>
      </div>

      {/* Desktop */}
      <div className="px-0 md:px-6">
        <RdpWindow>
          <Desktop />
        </RdpWindow>
      </div>

      {/* Footer */}
      <footer className="py-20 flex justify-center border-t border-white/5">
        <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase flex flex-col md:flex-row items-center gap-1 md:gap-0">
          <span style={{ fontFamily: "inherit" }}>
            © {new Date().getFullYear()} MVL Prem
          </span>
          <span className="hidden md:inline mx-2">•</span>
          <span style={{ fontFamily: "inherit" }}>All Rights Reserved</span>
        </h3>
      </footer>
    </>
  );
}
