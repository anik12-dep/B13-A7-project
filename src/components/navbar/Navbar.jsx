import { NavLink } from "react-router-dom";
import { FaHome, FaHistory, FaChartLine } from "react-icons/fa";

const Navbar = () => {
  
  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
      isActive
        ? "bg-[#1F4337] text-white shadow-sm" 
        : "text-gray-500 hover:bg-gray-100 hover:text-[#1F4337]" 
    }`;

  return (
    <div className="navbar bg-white border-b border-gray-100 px-4 lg:px-20 py-3 sticky top-0 z-50">
      <div className="flex-1">
        <h1 className="text-2xl font-black text-[#1F4337] tracking-tight">
          KeenKeeper
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
       
        <NavLink to="/" className={navLinkStyles}>
          <FaHome size={18} />
          <span className="hidden md:inline">Home</span>
        </NavLink>

        
        <NavLink to="/timeline" className={navLinkStyles}>
          <FaHistory size={18} />
          <span className="hidden md:inline">Timeline</span>
        </NavLink>

       
        <NavLink to="/stats" className={navLinkStyles}>
          <FaChartLine size={18} />
          <span className="hidden md:inline">Stats</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
