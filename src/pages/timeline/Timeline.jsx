import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { FaPhoneAlt, FaUsers, FaVideo, FaCommentAlt } from "react-icons/fa";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  // আইকন ম্যাপ
  const getIcon = (type) => {
    if (type.includes("Call"))
      return <FaPhoneAlt className="text-orange-500" />;
    if (type.includes("Meetup")) return <FaUsers className="text-yellow-600" />;
    if (type.includes("Video")) return <FaVideo className="text-blue-500" />;
    return <FaCommentAlt className="text-purple-500" />;
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#1a3a32] mb-4">Timeline</h1>
        <select className="bg-white border-gray-200 rounded-xl px-4 py-2 text-sm mb-8 shadow-sm">
          <option>Filter timeline</option>
        </select>

        <div className="space-y-3">
          {timeline &&
            timeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-lg">
                  {getIcon(item.title)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">
                    {item.title.split(" with ")[0]}{" "}
                    <span className="font-normal text-gray-400">with</span>{" "}
                    {item.title.split(" with ")[1]}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 mt-0.5">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          {(!timeline || timeline.length === 0) && (
            <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100 text-gray-300 font-bold">
              No activities recorded yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
