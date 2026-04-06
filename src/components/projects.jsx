import ProjectsCard from "./ui/projects-card";

export default function Projects() {
  return (
    <>
      {/* Open Source */}
      <div className="max-w-[1024px]">
        <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2">
          OPEN SOURCE
        </h1>

        {/* Simple Icons */}
        <ProjectsCard
          title="Simple Icons"
          role="Contributor & Maintainer"
          logo="/projects/simple-icons.svg"
          description="Started as a frequent contributor, submitting high-quality SVG
                icons of global brands. Based on consistent technical accuracy
                and adherence to project standards, I was invited to the
                maintainer team, Responsible for reviewing Pull Requests,
                ensuring code quality, and merging verified contributions into a
                library used by thousands of developers."
          linkUrl="https://simpleicons.org/?q=TryHackMe"
          linkText="Simple Icons"
        />
      </div>

      {/* Personal Projects */}
      <div className="max-w-[1024px] mt-8">
        <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2">
          PERSONAL_PROJECTS
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Portfolio */}
          <ProjectsCard
            title="Portfolio"
            logo="/projects/icon.svg"
            description="An interactive portfolio developed with React and Three.js. It
                features a simulated exploitation sequence using
                Metasploit-style terminal commands to 'breach' the system and
                establish a Remote Desktop Protocol (RDP) session."
            linkUrl="https://github.com/Mvlprem/portfolio"
            linkText="Github.com/Mvlprem"
          />
        </div>
      </div>
    </>
  );
}
