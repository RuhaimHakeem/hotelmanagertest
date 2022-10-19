import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import datas from "../data/orders.json";

export const OrdersBoard = ({ data, setUserData, userData }) => {
  const submitHandler = (data) => {
    const newState = userData.map((obj) => {
      if (obj.status === "New") {
        if (obj.id === data.id) {
          return { ...obj, status: "Active" };
        }
      } else if (obj.status === "Ready") {
        if (obj.id === data.id) {
          return { ...obj, status: "Complete" };
        }
      } else if (obj.status === "Active") {
        if (obj.id === data.id) {
          return { ...obj, status: "Ready" };
        }
      }

      return obj;
    });
    setUserData(newState);
  };
  return (
    <>
      <Card className="w-75 mb-5">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Order {data.id}
          </Card.Subtitle>
          <Card.Title>
            {data.space.name} From {data.pricelist.name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.items[0].quantity} Items - {data.items[0].price}
          </Card.Subtitle>
          <Card.Text className="fw-bold">{data.location}</Card.Text>
          {data.status === "New" ? (
            <Button variant="primary" onClick={() => submitHandler(data)}>
              Approve
            </Button>
          ) : data.status === "Ready" ? (
            <Button variant="primary" onClick={() => submitHandler(data)}>
              Complete
            </Button>
          ) : (
            <Button onClick={() => submitHandler(data)} variant="primary">
              Ready
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
