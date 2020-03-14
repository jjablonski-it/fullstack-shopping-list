import React from "react";
import { ListGroupItem, ListGroup, Button } from "reactstrap";

export const Items = ({ onDelete, items }) => {
  const button = <Button onClick={() => onDelete(id)}>&times;</Button>;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
          {item.done && button}
        </li>
      ))}
    </ul>
  );
};
