import React from "react";
import "./style.scss";
import Empty from "../../assets/emptyState.png";

const EmptyState = ({ header, message }) => {
  return (
    <div className="emptyState">
      <h3>{header}</h3>
      <h4>{message}</h4>
      <img src={Empty} alt="empty state" height="170px" />
    </div>
  );
};

export default EmptyState;
