import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./app.styles.css";
import { OrdersBoard } from "./components/orders-board.component";
import { Orders } from "./components/orders";

export const App = () => {
  return (
    <div id="page">
      <div className="sidebar" />
      <main>
        <div className="topbar">
          <span>Orders</span>
        </div>
        <Orders />
      </main>
    </div>
  );
};
