import React, { useState } from "react";
import { Form, Button, Input } from "reactstrap";

export const Add = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <Form inline onSubmit={onSubmit}>
      <Input className="col mr-2" value={input} onChange={onChange} />
      <Button type="submit">Add</Button>
    </Form>
  );
};
