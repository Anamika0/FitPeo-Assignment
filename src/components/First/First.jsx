import React from "react";
import "./First.scss";
import StatusCard from "./StatusCard";
import { BiSolidUpArrow } from "react-icons/bi";

const First = () => {
  return (
    <div className="status">
      <div className="leftitems-wrapper">
        <div className="left-right-wrapper">
          <div>
            <span className="dashboard-title">Dashboard</span>
            <div className="lane1">
              <div className="statusitems">
                <StatusCard
                  StatusName="Total orders"
                  StatusImg="./orders.svg"
                  StatusStats="75"
                  StatColor="#1ae256"
                  PercentStyle={{ color: "#1ae256" }}
                  StatArrow="Up"
                />
                <StatusCard
                  StatusName="Total delivered"
                  StatusImg="./delivered.svg"
                  StatusStats="70"
                  StatStyle={{ fill: "#F93F43" }}
                  PercentStyle={{ color: "#F93F43" }}
                  StatArrow="Down"
                />
                <StatusCard
                  StatusName="Total cancelled"
                  StatusImg="./cancelled.svg"
                  StatusStats="05"
                  StatStyle={{ fill: "#1ae256" }}
                  PercentStyle={{ color: "#1ae256" }}
                  StatArrow="Up"
                />
                <StatusCard
                  StatusName="Total revenue"
                  StatusImg="./revenue.svg"
                  StatusStats="$12k"
                  StatStyle={{ fill: "#F93F43" }}
                  PercentStyle={{ color: "#F93F43" }}
                  StatArrow="Down"
                />
              </div>
            </div>
          </div>
          <div className="profit">
            <div className="profitleft">
              <div className="statusname">Net Profit</div>
              <div className="profitrate">$ 6759.25</div>
              <div className="profitstats">
                <span className="uparrow">
                  <BiSolidUpArrow className="uparrow" />
                </span>
                <span>3%</span>
              </div>
            </div>
            <div className="profitright">
              <img src="./loading.svg" alt="" className="loading" />
              <span className="info">*The value here has been rounded off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
