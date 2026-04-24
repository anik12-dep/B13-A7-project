import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F4337] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-6 tracking-tighter">
          KeenKeeper
        </h2>
        <p className="text-emerald-100/60 max-w-xl mx-auto mb-10 text-lg font-medium leading-relaxed">
          Your personal shelf of meaningful connections. Browse, keep, and
          nurture the relationships that matter most.
        </p>

        <p className="text-xs font-black uppercase tracking-[3px] text-emerald-200/50 mb-6">
          Social Links
        </p>
        <div className="flex justify-center gap-8 mb-16">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-xl"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-xl"
          >
            <FaTwitter />
          </a>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-emerald-100/40">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
