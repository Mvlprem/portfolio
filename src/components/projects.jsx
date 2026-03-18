export default function Projects() {
  return (
    <>
      {/* Open Source */}
      <div className="max-w-[1024px]">
        <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2">
          OPEN SOURCE
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Google Cybersecurity Certificate Card */}
          <div className="bg-white/5 border rounded-lg border-white/10 p-6 flex flex-col md:flex-row gap-6">
            {/* Badge Image - Centered on mobile, left-aligned on desktop */}
            <div className="w-28 h-28 rounded-lg  bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/5 mx-auto md:mx-0">
              <img
                src="/projects/simple-icons.svg"
                alt="Simple Icons"
                className="w-24 h-24"
              />
            </div>

            {/* Cert Details */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <p className="text-xl text-white tracking-tight">
                  Simple Icons
                </p>
                <p className="text-white tracking-tight">
                  Contributor & Maintainer
                </p>
              </div>

              <p className="text-gray-400 text-sm font-plex leading-relaxed">
                "Started as a frequent contributor, submitting high-quality SVG
                icons of global brands. Based on consistent technical accuracy
                and adherence to project standards, I was invited to the
                maintainer team, Responsible for reviewing Pull Requests,
                ensuring code quality, and merging verified contributions into a
                library used by thousands of developers."
              </p>

              <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4 text-[11px] font-plex">
                <span className="text-emerald-400/80 text-sm">
                  <a
                    href="https://simpleicons.org/?q=TryHackMe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400/80 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30 transition-colors"
                  >
                    Simple Icons
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div className="max-w-[1024px] mt-8">
        <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2">
          PERSONAL_PROJECTS
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Google Cybersecurity Certificate Card */}
          <div className="bg-white/5 border rounded-lg border-white/10 p-6 flex flex-col md:flex-row gap-6">
            {/* Badge Image - Centered on mobile, left-aligned on desktop */}
            <div className="w-28 h-28 rounded-lg  bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/5 mx-auto md:mx-0">
              <img
                src="/projects/icon.svg"
                alt="Simple Icons"
                className="w-24 h-24"
              />
            </div>

            {/* Cert Details */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <p className="text-xl text-white tracking-tight">Portfolio</p>
              </div>

              <p className="text-gray-400 text-sm font-plex leading-relaxed">
                "An interactive portfolio developed with React and Three.js. It
                features a simulated exploitation sequence using
                Metasploit-style terminal commands to 'breach' the system and
                establish a Remote Desktop Protocol (RDP) session."
              </p>

              <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4 text-[11px] font-plex">
                <div className="text-gray-500">
                  REPO:{" "}
                  <span className="text-emerald-400/80 text-sm">
                    <a
                      href="https://github.com/Mvlprem/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400/80 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30 transition-colors"
                    >
                      Github.com/Mvlprem
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
