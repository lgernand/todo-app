import './App.css';
import './listItem/ListItem';
import './data/todolist';
import ListItem from './listItem/ListItem';
import todoList from './data/todolist';
import NewListItem from './listItem/NewListItem';
import React from 'react';

function App() {

  const [newItem, setNewItem] = React.useState("");
  const [newTime, setNewTime] = React.useState("");
  const [list, setList] = React.useState(todoList);

  function handleUpdateNewItem(event) {
    setNewItem(event.target.value);
  }

  function handleUpdateNewTime(event) {
    setNewTime(event.target.value);
  }

  function handleAddItem() {
    setList([...list, {id: list.length, task: newItem, estimatedTime: newTime}]);
  }

  function handleDeleteItem(event) {

  }

  return (
    <div className="App">
      <NewListItem 
        handleAddItem={handleAddItem}
        handleUpdateNewItem={handleUpdateNewItem}
        handleUpdateNewTime={handleUpdateNewTime}
      />
      <ListItem 
        handleDeleteItem={handleDeleteItem}
        items={list}
      />
    </div>
  );
}

export default App;
