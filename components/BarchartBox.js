"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

export default function BarchartBox(props) {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-2xl mb-5 font-semibold flex justify-between w-full">
        {props.title} <span>{props.value}</span>
      </h1>
      <div className="w-full h-full min-h-[9.5rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
