import React from "react";
import "./app.styles.css";
import { OrdersBoard } from "./components/orders-board.component";
import data from "./data/orders.json";

export const App = () => {
  return (
    <div id="page">
      <div className="sidebar" />
      <main>
        <div className="topbar">
          <span>Orders</span>
        </div>
        <div className="d-flex flex-wrap gap-4">
          {data.map((val) => (
            <OrdersBoard data={val} />
          ))}
        </div>
      </main>
    </div>
  );
};
