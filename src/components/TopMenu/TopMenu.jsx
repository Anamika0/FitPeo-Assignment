import React, { useState } from "react";
import "./TopMenu.scss";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

import SidebarNew from "../sidebar copy/SidebarNew.jsx";

const TopMenu = () => {
  return (
    <div className="topmenu">
      {/* <img
        onClick={() => setmenuSelected(!menuSelected)}
        className="menu-option"
        src="./menuOption.svg"
      ></img> */}
      <SidebarNew />
      <img className="logo" src="./FitpeoLogo.svg"></img>

      <form className="search-bar">
        <button>
          <FiSearch />
        </button>
        <input type="text" className="searchbar" placeholder="Search" />
      </form>

      <div className="navbaritems">
        <MdOutlineMailOutline className="navbaritem" title="Messages" />
        <LuSettings className="navbaritem" title="Settings" />
        <a title="Notifications">
          <svg
            className="navbaritem navbarimg"
            width="206"
            height="230"
            viewBox="0 0 206 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103 230C96.9294 230 91.1073 227.797 86.8147 223.876C82.5221 219.955 80.1106 214.636 80.1106 209.091H125.889C125.889 214.636 123.478 219.955 119.185 223.876C114.893 227.797 109.071 230 103 230ZM194.558 52.2727C194.558 48.1373 193.215 44.0947 190.7 40.6563C188.185 37.2178 184.61 34.5378 180.428 32.9552C176.245 31.3727 171.643 30.9586 167.203 31.7654C162.763 32.5722 158.684 34.5636 155.483 37.4878C152.282 40.412 150.102 44.1376 149.219 48.1936C148.335 52.2495 148.789 56.4537 150.521 60.2743C152.254 64.0949 155.187 67.3605 158.952 69.658C162.716 71.9555 167.141 73.1818 171.668 73.1818C177.739 73.1818 183.561 70.9789 187.854 67.0577C192.146 63.1365 194.558 57.8182 194.558 52.2727ZM202.649 170.336L183.113 152.49V94.0909H160.224V156.818C160.224 159.591 161.43 162.249 163.577 164.21L166.93 167.273H39.0698L42.4231 164.21C44.5696 162.249 45.7758 159.591 45.7764 156.818V94.0909C45.7427 86.4105 47.5695 78.8184 51.1261 71.8589C54.6826 64.8994 59.8808 58.7449 66.3478 53.8366C72.8148 48.9284 80.3905 45.3879 88.5318 43.4691C96.6731 41.5503 105.178 41.3007 113.438 42.7382L131.612 26.1364C131.014 25.726 130.369 25.3755 129.689 25.0909C124.738 23.5374 119.632 22.4309 114.445 21.7873V10.4545C114.445 7.68183 113.239 5.02267 111.093 3.06206C108.946 1.10146 106.035 0 103 0C99.9647 0 97.0537 1.10146 94.9074 3.06206C92.7611 5.02267 91.5553 7.68183 91.5553 10.4545V21.7455C72.5044 24.2573 55.0804 32.9508 42.471 46.2355C29.8615 59.5202 22.9096 76.508 22.887 94.0909V152.49L3.35086 170.336C1.75078 171.798 0.661173 173.661 0.219778 175.688C-0.221616 177.716 0.00502367 179.818 0.871046 181.728C1.73707 183.638 3.20359 185.27 5.08521 186.419C6.96684 187.568 9.17908 188.181 11.4423 188.182H194.558C196.821 188.181 199.033 187.568 200.915 186.419C202.796 185.27 204.263 183.638 205.129 181.728C205.995 179.818 206.222 177.716 205.78 175.688C205.339 173.661 204.249 171.798 202.649 170.336Z"
              fill="#7c9688"
            />
            <ellipse cx="162" cy="56.5" rx="44" ry="39.5" fill="#7ef977" />
          </svg>
          {/* <img
            src="./notification.svg"
            alt=""
           
          /> */}
        </a>
        <div>
          <img className="profilepic" src="./dogPfp.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
