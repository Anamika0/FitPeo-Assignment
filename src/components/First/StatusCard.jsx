import React from "react";
import "./StatusCard.scss";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const StatusCard = ({
  StatusName,
  StatusImg,
  StatusStats,
  StatStyle,
  StatArrow,
  PercentStyle,
}) => {
  return (
    <div className="statusitem">
      <div className="status-item-left">
        <img src={StatusImg} alt="" className="statusimage" />
        <div className="statusname">{StatusName}</div>
        <div className="statusstats">{StatusStats}</div>
      </div>
      <div className="status-item-right">
        <span className="uparrow">
          {StatArrow == "Up" ? (
            <BiSolidUpArrow style={StatStyle} className="uparrow" />
          ) : (
            <BiSolidDownArrow style={StatStyle} className="uparrow" />
          )}
        </span>
        <span className="statPercent" style={PercentStyle}>
          3%
        </span>
      </div>
    </div>
  );
};

export default StatusCard;
