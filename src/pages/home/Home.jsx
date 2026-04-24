import { useEffect, useState } from "react";
import friendsData from "../../data/friends.json";
import FriendCard from "../../components/friendcard/FriendCard";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
      
        <h2 className="text-5xl md:text-6xl font-black text-[#1F4337] mb-6 leading-tight tracking-tight">
          Friends to keep close <br /> in your life
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          Your personal shelf of meaningful connections. Browse, keep, and
          nurture the relationships that matter most.
        </p>

       
        <button className="bg-[#1F4337] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#152e26] transition-all mb-20">
          + Add a Friend
        </button>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: "Total Friends", value: "10", color: "text-[#1F4337]" },
            { label: "On Track", value: "3", color: "text-[#1F4337]" },
            { label: "Need Attention", value: "6", color: "text-red-500" },
            { label: "Interactions", value: "12", color: "text-[#1F4337]" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 transition-hover hover:shadow-md"
            >
              <h4 className={`text-5xl font-black ${stat.color}`}>
                {stat.value}
              </h4>
              <p className="text-gray-400 text-xs font-black uppercase tracking-[2px] mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

       
        <div className="text-left mb-10">
          <h3 className="text-2xl font-black text-[#1F4337]">Your Friends</h3>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((f) => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
