const CertificateCard = ({
  badge,
  title,
  issuedDate,
  description,
  credentialId,
  credentialUrl,
  platform,
  skills,
}) => {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex flex-col md:flex-row gap-6">
      {/* Badge Image */}
      <div className="w-24 h-24 bg-white/5 rounded-md flex-shrink-0 flex items-center justify-center border border-white/5 mx-auto md:mx-0">
        <img src={badge} alt={title} className="w-24 h-24 object-contain" />
      </div>

      {/* Cert Details */}
      <div className="flex-1 space-y-3 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <p className="text-xl font-bold text-white tracking-tight leading-tight">
            {title}
          </p>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-mono w-fit mx-auto md:mx-0 whitespace-nowrap">
            ISSUED: {issuedDate}
          </span>
        </div>

        <p className="text-gray-400 text-sm font-plex leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4 text-[11px] font-mono">
          <div className="text-gray-500">
            CREDENTIAL ID:{" "}
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/80 uppercase hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30 transition-colors"
            >
              {credentialId}
            </a>
          </div>
          <div className="text-gray-500 uppercase">
            PLATFORM: <span className="text-gray-300">{platform}</span>
          </div>
        </div>

        {/* Core Skills as tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-white/5 text-white text-[10px] rounded border border-white/10 font-plex uppercase tracking-wider"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
