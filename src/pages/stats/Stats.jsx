import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Text", value: 400 },
  { name: "Call", value: 300 },
  { name: "Video", value: 300 },
];

const COLORS = ["#8B5CF6", "#1F4337", "#34D399"];

const Stats = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black text-[#1a3a32] mb-12">
          Friendship Analytics
        </h1>

        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#1a3a32] mb-8">
            By Interaction Type
          </h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={100}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
