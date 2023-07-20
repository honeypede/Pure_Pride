"use client";

import Chartbox from "@/components/Chartbox";
import "./homeStyle.scss";
import Topbox from "@/components/Topbox";
import { barChartBoxProfits, barChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "@/utils/contentExports";
import BarchartBox from "@/components/BarchartBox";
import PieChartBox from "@/components/PieChartBox";
import Bigchart from "@/components/Bigchart";

const page = () => {
  return (
    <div className="home w-full h-full">
      <div className="box box1"><Topbox /></div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><Chartbox {...chartBoxRevenue}/></div>
      <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
      <div className="box box7"><Bigchart/></div>
      <div className="box box8"><BarchartBox {...barChartBoxRevenue}/></div>
      <div className="box box9"><BarchartBox {...barChartBoxProfits}/></div>
    </div>
  );
};

export default page;
