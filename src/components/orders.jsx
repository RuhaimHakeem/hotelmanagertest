import { OrdersBoard } from "./orders-board.component";
import { useState } from "react";
import data from "../data/orders.json";

export const Orders = () => {
  const [userData, setUserData] = useState(data);

  const newCount = userData.reduce((accumulator, obj) => {
    if (obj.status === "New") {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  const activeCount = userData.reduce((accumulator, obj) => {
    if (obj.status === "Active") {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  const readyCount = userData.reduce((accumulator, obj) => {
    if (obj.status === "Ready") {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5 className="mb-4">New ({newCount})</h5>
          {userData?.map((value) => {
            if (value.status === "New") {
              return (
                <OrdersBoard
                  key={value.key}
                  setUserData={setUserData}
                  userData={userData}
                  data={value}
                />
              );
            }
          })}
        </div>
        <div className="col-md-4">
          <h5 className="mb-">Active ({activeCount})</h5>
          {userData?.map((value) => {
            if (value.status === "Active") {
              return (
                <OrdersBoard
                  key={value.key}
                  setUserData={setUserData}
                  userData={userData}
                  data={value}
                />
              );
            }
          })}
        </div>
        <div className="col-md-4 d-md-none d-lg-block">
          <h5 className="mb-4">Ready ({readyCount})</h5>
          {userData?.map((value) => {
            if (value.status === "Ready") {
              return (
                <OrdersBoard
                  key={value.key}
                  setUserData={setUserData}
                  userData={userData}
                  data={value}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
