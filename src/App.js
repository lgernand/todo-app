import './App.css';
import './listItem/ListItem';
import './data/todolist';
import ListItem from './listItem/ListItem';
import todoList from './data/todolist';

function App() {
  return (
    <div className="App">
      <ListItem 
        items={todoList}
      />
    </div>
  );
}

export default App;
