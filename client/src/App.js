import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardHeader } from "reactstrap";
import axios from "axios";

// Components
import { List } from "./Components/List";
import { Add } from "./Components/Add";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/shoppingList")
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const toggleItem = id => {
    const tempItems = items;
    const cIndex = tempItems.findIndex(item => item._id === id);
    tempItems[cIndex].done = !tempItems[cIndex].done;

    axios
      .patch(`/api/shoppingList/${id}`)
      .then(res => {
        setItems([...items]);
      })
      .catch(err => console.log(err));
  };

  const deleteItem = id => {
    axios
      .delete(`/api/shoppingList/${id}`)
      .then(res => {
        setItems(items.filter(item => item._id !== id));
      })
      .catch(err => console.log(err));
  };

  const addItem = text => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    console.log(config);

    axios
      .post("/api/shoppingList", { text }, config)
      .then(item => setItems([...items, item.data]))
      .catch(err => console.log(err));
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
