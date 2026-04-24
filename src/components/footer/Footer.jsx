import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F4337] text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-6 tracking-tighter">
          KeenKeeper
        </h2>
        <p className="text-emerald-100/60 max-w-xl mx-auto mb-10 text-lg font-medium leading-relaxed">
          Your personal shelf of meaningful connections. Browse, keep, and
          nurture the relationships that matter most.
        </p>

        
        <div className="flex justify-center gap-8 mb-16">
          
        </div>

        <div className="border-t border-white/10 pt-10 text-emerald-100/40 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
