import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { FaPhoneAlt, FaVideo, FaCommentAlt, FaUsers } from "react-icons/fa";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  const [selectedFriend, setSelectedFriend] = useState("All");

  const getIcon = (type) => {
    if (type === "Call") return <FaPhoneAlt className="text-gray-600" />;
    if (type === "Text") return <FaCommentAlt className="text-gray-400" />;
    if (type === "Video") return <FaVideo className="text-gray-600" />;
    return <FaUsers className="text-orange-400" />;
  };

  const filteredTimeline =
    selectedFriend === "All"
      ? timeline
      : timeline.filter((item) => item.name === selectedFriend);

  const friendList = [...new Set(timeline.map((item) => item.name))];

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#1a3a32] mb-6">Timeline</h1>

        {/* ড্রপডাউন সেকশন */}
        <div className="mb-10">
          <select
            onChange={(e) => setSelectedFriend(e.target.value)}
            // এখানে text-[#1a3a32] এবং border-gray-300 দেওয়া হয়েছে যাতে লেখা গাঢ় দেখায়
            className="bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold text-[#1a3a32] outline-none shadow-sm w-full md:w-64 cursor-pointer focus:border-[#1a3a32] transition-colors"
          >
            <option value="All" className="text-[#1a3a32]">
              All interactions
            </option>
            {friendList.map((name) => (
              <option key={name} value={name} className="text-gray-900">
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* টাইমলাইন লিস্ট */}
        <div className="space-y-4">
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-xl">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-gray-800">
                    {item.type}{" "}
                    <span className="font-normal text-gray-400 text-sm">
                      with
                    </span>{" "}
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 text-gray-300 font-bold">
              No interactions recorded yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
