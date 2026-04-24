import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friend/${friend.id}`} className="group">
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center h-full">
        
        <div className="relative inline-block mb-6">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 shadow-sm group-hover:scale-105 transition-transform"
          />
          
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        
        <h3 className="text-xl font-black text-[#1a3a32] mb-1">
          {friend.name}
        </h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          {friend.category}
        </p>

      
        <div className="mb-6">
          <span
            className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full ${
              friend.status === "Needs Attention"
                ? "bg-red-50 text-red-500"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {friend.status}
          </span>
        </div>

       
        <div className="pt-4 border-t border-gray-50">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Last Contact
          </p>
          <p className="text-lg font-black text-[#1a3a32]">
            {friend.days_since_contact} Days Ago
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
