import React from "react";
import "./FirstNew.scss";
import StatusCard from "../First/StatusCard";
import { BiSolidUpArrow } from "react-icons/bi";

import BarChartOne from "..//charts/BarChart";
import Orders from "../Orders/Orders";
import Feedback from "../Feedback/Feedback";
import ProgressBar from "../ProgressBar/ProgressBar";
const FirstNew = () => {
  return (
    <div className="firstNew">
      <div className="left-items">
        <div className="dashboard">
          <span className="dashboard-title">Dashboard</span>
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
        <div className="barchart">
          <span className="barchart-title">Activity</span>
          <BarChartOne />
        </div>
        <div className="orders">
          <Orders />
        </div>
      </div>

      <div className="right-items">
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
            <ProgressBar />
            {/* <img src="./loading.svg" alt="" className="loading" /> */}
            <span>*The value here has been rounded off</span>
          </div>
        </div>
        <div className="discover">
          <div className="discover-items">
            <div className="discover-item">
              <img className="discover-icon" src="./goals.svg" alt="" />
              <span>Goals</span>
            </div>
            <div className="discover-item">
              <img className="discover-icon" src="./popularDishes.svg" alt="" />
              <span>Popular Dishes</span>
            </div>
            <div className="discover-item">
              <img className="discover-icon" src="./menu.svg" alt="" />
              <span>Menu</span>
            </div>
          </div>
          <div className="arrows">
            <img className="single-arrow" src="./discoverArrow.svg" />
            <img className="single-arrow" src="./discoverArrow.svg" />
            <img className="single-arrow" src="./discoverArrow.svg" />
          </div>
        </div>
        <div className="customer-feedbacks">
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default FirstNew;
