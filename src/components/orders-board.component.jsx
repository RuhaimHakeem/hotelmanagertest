import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const OrdersBoard = ({ data }) => {
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
            {data.items.map((item) => item.quantity)} Items -{" "}
            {data.items.map((item) => item.price)}
          </Card.Subtitle>
          <Card.Text className="fw-bold">{data.location}</Card.Text>
          {data.status === "New" ? (
            <Button variant="primary">Approve</Button>
          ) : (
            <Button variant="primary">Ready</Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
