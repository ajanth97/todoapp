import React, { useState } from "react";
import { List, Divider } from "antd";
import { Checkbox } from "antd";
import { Input } from "antd";
import { Button } from "antd";

//providing a closure for the id counter
// a function for incrementing id
const idInc = (function () {
  let id = 1;
  return function () {
    return id++;
  };
})();

export function TodoList() {
  //using the state hook
  //data contains an array of todo objects
  const [data, updateData] = useState([]);

  //a function to toggle todos
  const toggleTodo = (item) => {
    updateData(
      data.map((val) => {
        if (val.id !== item.id) return val;
        return {
          id: val.id,
          text: val.text,
          completed: !val.completed,
        };
      })
    );
  };
  //a function to delete todos
  const deleteTodos = (item) => {
    updateData(
      data.filter((val) => {
        return val.id !== item.id;
      })
    );
  };

  // This function returns the array of completed todos
  const completedTodos = () => {
    return data.filter((item) => item.completed === true);
  };

  return (
    <div>
      <Divider orientation="left">Todo App</Divider>
      {console.log(data)}
      <List
        size="large"
        header={
          <div>
            <Input
              placeholder="Type in your Todo and press enter "
              onPressEnter={(input) =>
                //using the spread operator to add the todo object into our array
                updateData([
                  ...data,
                  //each todo object contains these 3 key-value pairs
                  { id: idInc(), text: input.target.value, completed: false },
                ])
              }
            />
            <h3>Todos left : {data.length - completedTodos().length}</h3>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <h3>{item.text}</h3>
            <Checkbox
              //matching the checked state with the boolean in our todo object
              checked={item.completed}
              onChange={() => toggleTodo(item)}
            >
              Completed ?
            </Checkbox>
            <Button danger onClick={() => deleteTodos(item)}>
              Delete
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}
