const ProjectsCard = ({
  logo,
  title,
  role,
  description,
  linkUrl,
  linkText,
}) => {
  return (
    <div className="bg-white/5 border rounded-lg border-white/10 p-6 flex flex-col md:flex-row gap-6">
      {/* Image */}
      <div className="w-28 h-28 rounded-lg bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/5 mx-auto md:mx-0">
        <img src={logo} alt={title} className="w-24 h-24" />
      </div>

      {/* Project Details */}
      <div className="flex-1 space-y-3 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <p className="text-xl text-white tracking-tight">{title}</p>
          <p className="text-white tracking-tight">{role}</p>
        </div>

        <p className="text-gray-400 text-sm font-plex leading-relaxed">
          "{description}"
        </p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4 text-[11px] font-plex">
          <span className="text-emerald-400/80 text-sm">
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/80 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30 transition-colors"
            >
              {linkText}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
