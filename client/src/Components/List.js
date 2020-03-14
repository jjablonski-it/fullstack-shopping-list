import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

// Components
import { Items } from "./Items";

export const List = ({ items, onDelete, onToggle }) => {
  const toBuy = items.filter(item => item.done === false);
  const bought = items.filter(item => item.done !== false);

  return (
    <Fragment>
      <h4>To buy</h4>
      <ListGroup>
        <Items items={toBuy} onToggle={onToggle} onDelete={onDelete} />
      </ListGroup>
      <hr />
      <h4>Bought</h4>
      <Items items={bought} onToggle={onToggle} onDelete={onDelete} />
    </Fragment>
  );
};
