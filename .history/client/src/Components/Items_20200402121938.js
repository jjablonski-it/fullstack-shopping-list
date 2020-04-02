import React from "react";
import { ListGroupItem, ListGroup, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Items = ({ onToggle, onDelete, items }) => {
  const button = id => (
    <Button size="sm" color="success float-right" onClick={() => onToggle(id)}>
      &#10003;
    </Button>
  );

  const buttonsDone = id => (
    <>
      <Button
        size="sm"
        color="danger float-right ml-2"
        onClick={() => onDelete(id)}
      >
        &times;
      </Button>
      <Button
        size="sm"
        color="warning float-right"
        onClick={() => onToggle(id)}
      >
        &#8630;
      </Button>
    </>
  );

  return (
    <ListGroup>
      {items.length > 0 ? (
        items.map(item => (
          <ListGroupItem color={item.done ? "secondary" : ""}>
            {item.text}
            {item.done ? buttonsDone(item._id) : button(item._id)}
          </TransitionGroup>
        ))
      ) : (
        <span>Empty</span>
      )}
    </ListGroup>
  );
};
