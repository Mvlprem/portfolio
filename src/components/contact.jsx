export default function Contact() {
  return (
    <div className="max-w-[1024px]">
      <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2 uppercase">
        Contact
      </h1>

      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          <p className="text-gray-400 font-plex leading-relaxed">
            Whether you have a{" "}
            <span className="text-white">fun opportunity</span>, a technical
            question, or just want to chat about security and automation, I’m
            always open to hearing from you. Feel free to reach out via email or
            connect on LinkedIn.
          </p>

          {/* Email */}
          <div className=" flex flex-col md:flex-row gap-4">
            <a
              href="mailto:mvl.prem@outlook.com"
              className="flex-1 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="text-emerald-400 group-hover:scale-110 transition-transform text-xl">
                @
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-mono">
                  Direct Mail
                </p>
                <p className="text-white font-plex">mvl.prem@outlook.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mvlprem"
              target="_blank"
              className="flex-1 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="text-emerald-400 group-hover:scale-110 transition-transform text-xl">
                in
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-mono">
                  Professional Network
                </p>
                <p className="text-white font-plex">linkedin.com/in/mvlprem</p>
              </div>
            </a>
          </div>
        </div>

        <p className="text-gray-600 italic">
          "Response time may vary based on ongoing labs and active sessions."
        </p>
      </div>
    </div>
  );
}
