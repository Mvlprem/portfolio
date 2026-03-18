export default function DesktopIcon({ name, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-max cursor-pointer flex flex-col items-center group hover:bg-white/20 rounded-lg transition-colors duration-200"
    >
      <div className="p-4 pb-0 rounded-lg">
        <img src={icon} alt={name} className="w-16 h-16" />
      </div>
      <p className="text-white text-sm mt-2 pb-4">{name}</p>
    </div>
  );
}
