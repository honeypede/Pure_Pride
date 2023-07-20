import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

export default function PieChartBox() {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <h1 className="text-2xl">Top Products</h1>
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={800} height={400}>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "10px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={`cell-${item.name}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between gap-3 text-sm">
        {data.map((item) => (
          <div className="option flex flex-col gap-3 items-center w-full h-full" key={item.name}>
            <div className="title flex justify-between items-center gap-3">
              <div
                className="dot w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
