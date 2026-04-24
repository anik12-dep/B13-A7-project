import { useParams } from "react-router-dom";
import { useContext } from "react";
import friends from "../../data/friends.json";
import { TimelineContext } from "../../context/TimelineContext";
import {
  FaPhoneAlt,
  FaCommentAlt,
  FaVideo,
  FaEdit,
  FaTrash,
  FaArchive,
  FaClock,
} from "react-icons/fa";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == parseInt(id));
  const { addEntry } = useContext(TimelineContext);

  if (!friend) {
    return <div className="text-center p-20 font-bold">Friend not found!</div>;
  }

  
  const handleInteraction = (type) => {
    addEntry(type, friend.name);
    alert(`${type} recorded! Check Timeline.`);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-10 rounded-[32px] text-center shadow-sm border border-gray-100">
            <img
              src={friend.picture}
              className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-gray-50 shadow-sm object-cover"
              alt={friend.name}
            />
            <h1 className="text-3xl font-black text-[#1a3a32] mb-2">
              {friend.name}
            </h1>
            <div className="flex flex-col items-center gap-2">
              <span className="bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                {friend.status}
              </span>
              <span className="bg-[#E9F0EE] text-[#1F4337] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {friend.category || "Family"}
              </span>
            </div>
            <p className="mt-6 text-gray-400 italic text-sm leading-relaxed">
              "{friend.bio || "No bio available"}"
            </p>
            <p className="text-[10px] text-gray-400 mt-4">
              Preferred: {friend.email}
            </p>
          </div>

          
          <div className="space-y-3">
            <button className="w-full py-4 bg-white rounded-2xl font-bold text-gray-700 shadow-sm flex items-center justify-center gap-3 border border-gray-100 hover:bg-gray-50 transition-all">
              <FaClock /> Snooze 2 Weeks
            </button>
            <button className="w-full py-4 bg-white rounded-2xl font-bold text-gray-700 shadow-sm flex items-center justify-center gap-3 border border-gray-100 hover:bg-gray-50 transition-all">
              <FaArchive /> Archive
            </button>
            <button className="w-full py-4 bg-white rounded-2xl font-bold text-red-500 shadow-sm flex items-center justify-center gap-3 border border-red-50 hover:bg-red-50 transition-all">
              <FaTrash /> Delete
            </button>
          </div>
        </div>

       
        <div className="lg:col-span-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
              <p className="text-4xl font-black text-[#1a3a32]">
                {friend.days_since_contact}
              </p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-2">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
              <p className="text-4xl font-black text-[#1a3a32]">
                {friend.goal}
              </p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-2">
                Goal (Days)
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
              <p className="text-2xl font-black text-[#1a3a32]">Feb 27, 2026</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-4">
                Next Due
              </p>
            </div>
          </div>

         
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
            <button className="absolute top-8 right-8 bg-gray-50 p-2 rounded-lg text-gray-400 hover:text-gray-600">
              <FaEdit />
            </button>
            <h3 className="text-xl font-black text-[#1a3a32] mb-4">
              Relationship Goal
            </h3>
            <p className="text-gray-500 font-medium">
              Connect every{" "}
              <span className="font-black text-[#1a3a32]">
                {friend.goal} days
              </span>
            </p>
          </div>

          
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-black text-[#1a3a32] mb-6">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleInteraction("Call")}
                className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group"
              >
                <FaPhoneAlt className="text-xl text-gray-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm">Call</span>
              </button>

              <button
                onClick={() => handleInteraction("Text")}
                className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group"
              >
                <FaCommentAlt className="text-xl text-gray-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm">Text</span>
              </button>

              <button
                onClick={() => handleInteraction("Video")}
                className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group"
              >
                <FaVideo className="text-xl text-gray-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
