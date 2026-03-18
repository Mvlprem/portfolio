export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="mt-4 mb-6 border-t border-white/5 pt-4 text-white space-y-4">
        <p className="leading-relaxed">
          My journey into security started by "breaking" the very things I was
          building. By developing a{" "}
          <span className="text-emerald-400">
            working proficiency in Java, Kotlin, React, and JavaScript,{" "}
          </span>
          I developed a deep understanding of vulnerabilities at the source-code
          level. I believe that to defend a system, you must first understand
          the logic used to create it.
        </p>

        <p>
          I am a firm believer in{" "}
          <span className="text-blue-400">efficiency through automation</span>,
          utilizing <span className="text-emerald-400">Python and Bash</span> to
          streamline security workflows. Currently, I am focused on learning new
          skills through hands-on labs on
          <span className="text-emerald-400"> TryHackMe and HackTheBox</span>,
          focusing on real-world threat scenarios. I look forward to
          contributing to a Security Operations team where I can leverage my
          "builder’s mindset" to defend systems against modern threats.
        </p>

        <p className="bg-black/40 rounded-sm p-2 inline-block font-plex font-bold text-gray-500">
          "I love video games so much, I feel they are an escape from our
          sometimes boring lives."
        </p>
      </div>
    </div>
  );
}
