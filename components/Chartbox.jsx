"use client";

import Image from "next/image";
import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

export default function Chartbox(props) {
  return (
    <div className="Chartbox w-full flex h-full">
      <div className="boxInfo flex flex-col justify-between flex-[3]">
        <div className="title flex items-center space-x-3">
          <Image src={props.icon} alt="nothing much" />
          <span>{props.title}</span>
        </div>
        <h1 className="text-3xl font-semibold">{props.number}</h1>
        <Link href="/" style={{ color: props.color }}>
          View more
        </Link>
      </div>
      <div className="chartInfo flex-[2] flex flex-col justify-between">
        <div className="charts w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ y: 40 }}
              />
              
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts flex flex-col text-right">
          <span
            className="percentage text-2xl font-semibold"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}
