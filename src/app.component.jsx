import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./app.styles.css";
import { OrdersBoard } from "./components/orders-board.component";
import data from "./data/orders.json";

export const App = () => {
  const newStatus = [];
  const activeStatus = [];
  const readyStatus = [];

  data?.map((value) => {
    if (value.status === "New") {
      newStatus.push(value);
    } else if (value.status === "Active") {
      activeStatus.push(value);
    } else if (value.status === "Ready") {
      readyStatus.push(value);
    }
  });

  console.log(newStatus);

  return (
    <div id="page">
      <div className="sidebar" />
      <main>
        <div className="topbar">
          <span>Orders</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="mb-4">New</h5>
              {newStatus?.map((value) => (
                <OrdersBoard data={value} />
              ))}
            </div>
            <div className="col-md-4">
              <h5 className="mb-4">Active</h5>
              {activeStatus.map((value) => (
                <OrdersBoard data={value} />
              ))}
            </div>
            <div className="col-md-4">
              <h5 className="mb-4">Ready</h5>
              {readyStatus.map((value) => (
                <OrdersBoard data={value} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
