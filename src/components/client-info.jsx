"use client";
import { useState, useEffect } from "react";

export default function ClientInfo() {
  const [data, setData] = useState({
    ip: "0.0.0.0",
    isp: "DETECTING...",
    city: "...",
    state: "...",
    browser: "...",
    os: "DETECTING...",
  });

  useEffect(() => {
    fetch("https://api.ipapi.is")
      .then((res) => res.json())
      .then((json) => {
        setData((prev) => ({
          ...prev,
          ip: json.ip,
          isp: json.company,
          city: json.city,
          state: json.region,
        }));
      })
      .catch(() =>
        setData((prev) => ({ ...prev, ip: "127.0.0.1", isp: "LOCAL_HOST" })),
      );

    // Detect Browser & OS
    const ua = navigator.userAgent;

    // --- OS Detection ---
    let detectedOS = "UNKNOWN_OS";
    if (ua.indexOf("Win") !== -1) detectedOS = "WINDOWS_NT";
    if (ua.indexOf("Mac") !== -1) detectedOS = "DARWIN_MACOS";
    if (ua.indexOf("X11") !== -1) detectedOS = "UNIX_X11";
    if (ua.indexOf("Linux") !== -1) detectedOS = "GNU_LINUX";
    if (/Android/.test(ua)) detectedOS = "ANDROID_OS";
    if (/iPhone|iPod/.test(ua)) detectedOS = "IOS_MOBILE";
    if (ua.indexOf("Mac") !== -1) {
      const isiPad = navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
      detectedOS = isiPad ? "IPADOS_MOBILE" : "DARWIN_MACOS";
    }

    // --- Browser Detection ---
    let browserName = "UNKNOWN";
    let fullVersion = "0";
    if (ua.indexOf("Chrome") > -1) {
      browserName = "CHROME";
      fullVersion = ua.split("Chrome/")[1].split(" ")[0];
    } else if (ua.indexOf("Firefox") > -1) {
      browserName = "FIREFOX";
      fullVersion = ua.split("Firefox/")[1];
    } else if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) {
      browserName = "SAFARI";
      fullVersion = ua.split("Version/")[1].split(" ")[0];
    }

    setData((prev) => ({
      ...prev,
      os: detectedOS,
      browser: `${browserName}_V${fullVersion.split(".")[0]}`,
    }));
  }, []);

  return (
    <div className="font-plex text-[10px] text-white/50 uppercase">
      <p className="text-white mb-2 tracking-[0.3em] border-b border-white/20 pb-1 inline-block">
        // CLIENT_SYSTEM_DATA
      </p>
      <div className="grid grid-cols-[80px_1fr] gap-x-2">
        <span>IPV4_ADDR:</span> <span className="text-white">{data.ip}</span>
        <span>ISP_PROV:</span> <span className="text-white">{data.isp}</span>
        <span>OS_KERNEL:</span> <span className="text-white">{data.os}</span>
        <span>BROWSER:</span> <span className="text-white">{data.browser}</span>
        <span>STATE:</span> <span className="text-white">{data.state}</span>
        <span>CITY:</span> <span className="text-white">{data.city}</span>
      </div>
      <p className="mt-3 text-[9px] text-green-500/80">
        &gt; CONNECTION_ESTABLISHED:
        <span className="animate-pulse">SECURE</span>
      </p>
    </div>
  );
}
