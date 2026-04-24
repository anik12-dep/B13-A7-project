import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  // স্ট্যাটাস অনুযায়ী কালার সেট
  const statusColors = {
    overdue: "bg-red-100 text-red-600",
    "on-track": "bg-green-100 text-green-600",
    "almost due": "bg-orange-100 text-orange-600",
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white p-8 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all border border-gray-50 text-center flex flex-col items-center">
        <img
          src={friend.picture}
          className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-gray-50"
          alt={friend.name}
        />
        <h2 className="text-xl font-extrabold text-[#1a3a32]">{friend.name}</h2>
        <p className="text-xs text-gray-400 mt-1 mb-3">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex gap-2 mb-4">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-widest text-[#1F4337] bg-[#E9F0EE] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`text-[11px] font-black uppercase tracking-widest px-5 py-2 rounded-full ${statusColors[friend.status] || "bg-gray-100"}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
