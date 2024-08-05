import React, { useState } from "react";
import "./Sidebar.scss";

import { BiSolidHome } from "react-icons/bi";
import { MdOutlineInsertChart } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {/* <img className="logo" src="./FitpeoLogo.svg"></img> */}
        <div className="listitems-wrapper">
          <div className="listitems">
            <div>
              <div
                className={activeItem == "Dashboard" ? "line active" : "line"}
              >
                <BiSolidHome
                  title="Dashboard"
                  className={
                    activeItem == "Dashboard" ? "listitemactive" : "listitem"
                  }
                />
                <span
                  onClick={() => setActiveItem("Dashboard")}
                  className={
                    activeItem == "Dashboard"
                      ? "listitemnameactive"
                      : "listitem-name"
                  }
                >
                  Dashboard
                </span>
              </div>
            </div>
            <div>
              <div
                className={activeItem == "Progress" ? "line active" : "line"}
              >
                <MdOutlineInsertChart
                  className={
                    activeItem == "Progress" ? "listitemactive" : "listitem"
                  }
                  title="Progress"
                />
                <span
                  onClick={() => {
                    setActiveItem("Progress");
                  }}
                  className={
                    activeItem == "Progress"
                      ? "listitemnameactive"
                      : "listitem-name"
                  }
                >
                  Progress
                </span>
              </div>
            </div>
            <div>
              <div
                className={activeItem == "Calender" ? "line active" : "line"}
              >
                <FaRegCalendarCheck
                  className={
                    activeItem == "Calender" ? "listitemactive" : "listitem"
                  }
                  title="Calender"
                />
                <span
                  onClick={() => {
                    setActiveItem("Calender");
                  }}
                  className={
                    activeItem == "Calender"
                      ? "listitemnameactive"
                      : "listitem-name"
                  }
                >
                  Calender
                </span>
              </div>
            </div>
            <div>
              <div className={activeItem == "Wallet" ? "line active" : "line"}>
                <RiWallet3Line
                  className={
                    activeItem == "Wallet" ? "listitemactive" : "listitem"
                  }
                  title="Wallet"
                />
                <span
                  onClick={() => {
                    setActiveItem("Wallet");
                  }}
                  className={
                    activeItem == "Wallet"
                      ? "listitemnameactive"
                      : "listitem-name"
                  }
                >
                  Wallet
                </span>
              </div>
            </div>
            <div>
              <div
                className={activeItem == "Shopping" ? "line active" : "line"}
              >
                <RiShoppingBag4Line
                  className={
                    activeItem == "Shopping" ? "listitemactive" : "listitem"
                  }
                  title="Shopping"
                />
                <span
                  onClick={() => {
                    setActiveItem("Shopping");
                  }}
                  className={
                    activeItem == "Shopping"
                      ? "listitemnameactive"
                      : "listitem-name"
                  }
                >
                  Shopping
                </span>
              </div>
            </div>
          </div>
          <div className="logoutitem">
            <IoMdLogOut className="logout" title="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
