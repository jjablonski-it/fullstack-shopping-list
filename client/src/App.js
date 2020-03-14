import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardHeader } from "reactstrap";
import axios from "axios";

// Components
import { List } from "./Components/List";
import { Add } from "./Components/Add";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Milk",
      amount: 1,
      done: true
    },
    {
      id: 2,
      text: "Bread",
      amount: 2,
      done: false
    },
    {
      id: 3,
      text: "Butter",
      amount: 3,
      done: true
    }
  ]);

  useEffect(() => {
    // Api call will be here
  }, []);

  const toggleItem = id => {
    const tempItems = items;
    const cIndex = tempItems.findIndex(item => item.id === id);
    tempItems[cIndex].done = !tempItems[cIndex].done;
    setItems([...items]);
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = item => {
    setItems([...items, item]);
  };

  return (
    <Container>
      <h1>Shopping list</h1>
      <Card>
        <CardHeader>
          <Add onAdd={addItem} />
        </CardHeader>
        <CardBody>
          <List items={items} onToggle={toggleItem} onDelete={deleteItem} />
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
