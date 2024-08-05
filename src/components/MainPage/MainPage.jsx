import React from "react";
import Sidebar from "../SideBar/Sidebar";
import TopMenu from "../TopMenu/TopMenu";
import "./MainPage.scss";

import FirstNew from "../FirstNew/FirstNew";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Sidebar />
      <TopMenu />
      <FirstNew />
    </div>
  );
};

export default MainPage;
