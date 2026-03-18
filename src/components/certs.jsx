export default function Certs() {
  return (
    <div className="max-w-[1024px]">
      <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2">
        CERTIFICATIONS
      </h1>

      {/* Google Cybersecurity */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex flex-col md:flex-row gap-6">
          {/* Badge Image */}
          <div className="w-24 h-24 bg-white/5 rounded-md flex-shrink-0 flex items-center justify-center border border-white/5 mx-auto md:mx-0">
            <img
              src="/badge/google.png"
              alt="Google Cybersecurity Badge"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Cert Details */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <p className="text-xl font-bold text-white tracking-tight">
                Google Cybersecurity
                <br /> Professional Certificate
              </p>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-mono w-fit mx-auto md:mx-0">
                ISSUED: FEB 2026
              </span>
            </div>

            <p className="text-gray-400 text-sm font-plex leading-relaxed">
              Foundational training in security analyst workflows and network
              architecture. Developed a solid understanding of{" "}
              <span className="text-white">OSI and TCP/IP models </span>
              while building hands-on skills in{" "}
              <span className="text-white">Linux, SQL, and Python </span>
              for security-related tasks and data analysis.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4 text-[11px] font-mono">
              <div className="text-gray-500">
                CREDENTIAL ID:{" "}
                <span className="text-emerald-400/80 uppercase">
                  <a
                    href="https://www.credly.com/badges/7c0e90f7-62f6-418b-bdb9-ae29bd1e9777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400/80 uppercase hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30 transition-colors"
                  >
                    7c0e90f7-62f6-418b-bdb9-ae29bd1e9777
                  </a>
                </span>
              </div>
              <div className="text-gray-500">
                PLATFORM: <span className="text-gray-300">COURSERA</span>
              </div>
            </div>

            {/* Core Skills as tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              {["Python", "SQL", "Linux", "BASH", "TCP/IP", "OSI"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] rounded border border-white/10 font-plex uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
