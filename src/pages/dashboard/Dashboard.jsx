import React, { useState } from "react";
import "./dashboard.css";
import DashBordHeader from "../../components/dashboardComponents/dashboradHeader/DashBordHeader";
import DashboardMain from "../../components/dashboardComponents/dashboardMain/DashboardMain";
import AddContent from "../../components/dashboardComponents/addContent/AddContent";
import Couse from "../../components/dashboardComponents/course/Couse";

const Dashboard = () => {
  const [showDownContent, setShowDownCount] = useState(0);

  return (
    <div className="dash-board-main">
      <DashBordHeader setShowDownCount={setShowDownCount} />
      <div className="dash-board-scroolable-card">
        {showDownContent === 0 ? (
          <DashboardMain />
        ) : showDownContent === 1 ? (
          <AddContent />
        ) : (
          <Couse />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
