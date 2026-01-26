import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Edition {
  name: string;
  path: string;
  flag: string;
}

export const EditionsDropdown = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const editions: Edition[] = [
    {
      name: "Singapore Edition",
      path: "/singapore",
      flag: "🇸🇬"
    },
    {
      name: "Dubai Edition", 
      path: "/dubai",
      flag: "🇦🇪"
    }
  ];

  const currentEdition = editions.find(edition => edition.path === location.pathname);
  const isLandingPage = location.pathname === '/' || !currentEdition;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEditionSelect = (edition: Edition) => {
    navigate(edition.path);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (!isHovered) {
        setIsOpen(false);
      }
    }, 150);
  };

  return (
    <div 
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-end justify-center gap-2.5 px-4 relative flex-[0_0_auto] hover:bg-gray-50 rounded-md transition-all duration-300 group border-none bg-transparent mt-[-1.00px] pb-1 "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="relative flex items-end justify-center w-fit [font-family:'Geist',Helvetica] font-normal text-[#232323] text-base text-center tracking-[-0.32px] leading-6 whitespace-nowrap group-hover:text-[#7bb302] transition-colors duration-300">
          {isLandingPage ? 'Editions' : currentEdition?.name || 'Editions'}
        </span>
        <img
          className={`relative w-[10.33px] h-[5.72px] mr-[-0.45px] transition-transform duration-300 self-center ${isOpen ? 'rotate-180' : ''}`}
          alt=""
          src="https://c.animaapp.com/6IK4krLc/img/vector.svg"
        />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {editions.map((edition) => (
            <button
              key={edition.path}
              onClick={() => handleEditionSelect(edition)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-200 flex items-center gap-3 ${
                currentEdition?.path === edition.path ? 'bg-green-50 text-[#7bb302]' : 'text-[#232323]'
              }`}
            >
              <span className="text-lg transition-transform duration-200 hover:scale-125">{edition.flag}</span>
              <div className="flex flex-col">
                <span className="[font-family:'Geist',Helvetica] font-medium text-sm">
                  {edition.name}
                </span>
                {currentEdition?.path === edition.path && (
                  <span className="[font-family:'Geist',Helvetica] font-normal text-xs text-[#7bb302]">
                    Current
                  </span>
                )}
              </div>
              {currentEdition?.path === edition.path && (
                <div className="ml-auto w-2 h-2 bg-[#7bb302] rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
