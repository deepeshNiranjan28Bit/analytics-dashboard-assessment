import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import {
  parseCSVData,
  calculateTotalOrders,
  calculateEVOrders,
  calculateNonEVOrders,
  groupDataByYear,
  groupDataByMake,
  calculateTopModel,
} from "../data/InsightsHelper";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [insights, setInsights] = useState({
    totalOrders: 0,
    evOrders: 0,
    nonEvOrders: 0,
    ordersByYear: {},
    makeDistribution: {},
    topModel: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const csvData = await parseCSVData(); // Wait for parsed CSV data
      setData(csvData);

      setInsights({
        totalOrders: calculateTotalOrders(csvData),
        evOrders: calculateEVOrders(csvData),
        nonEvOrders: calculateNonEVOrders(csvData),
        ordersByYear: groupDataByYear(csvData),
        makeDistribution: groupDataByMake(csvData),
        topModel: calculateTopModel(csvData),
      });
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="insights">
        <div className="insight-card">
          <h2>Total Orders till Date</h2>
          <p>{insights.totalOrders}</p>
        </div>
        <div className="insight-card">
          <h2>Battery Electric Vehicle (BEV) Orders</h2>
          <p>{insights.evOrders}</p>
        </div>
        <div className="insight-card">
          <h2>Plug-in Hybrid Electric Vehicle (PHEV) Orders</h2>
          <p>{insights.nonEvOrders}</p>
        </div>
        <div className="insight-card">
          <h2>Total Orders by Year</h2>
          <p>{Object.keys(insights.ordersByYear).length}</p>
        </div>
        <div className="insight-card">
          <h2>Unique Makes</h2>
          <p>{Object.keys(insights.makeDistribution).length}</p>
        </div>
        <div className="insight-card">
          <h2>Top Model Name</h2>
          <p>{insights.topModel}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;