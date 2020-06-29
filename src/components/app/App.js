import React from "react";
import TodoForm from "../todo-form/TodoForm";
import TodoList from "../todo-list/TodoList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], filterCriteria: "all" };
  }
  componentDidMount() {
    this.setState({todoList: this.getTodoList()});
  }
  getTodoList = () => {
    return JSON.parse(localStorage.getItem("todo-list")) || [];
  };

  filterTodo = (filterCriteria) => {
    this.setState({ filterCriteria });
  };

  addTodo = (value) => {
    if (!value) return;

    this.setState({
      todoList: [...this.state.todoList, { task: value, isCompleted: false }],
    });

    this.saveLocalTodoList();
  };

  saveLocalTodoList = () => {
    console.log(this.state.todoList);
    
    localStorage.setItem("todo-list", JSON.stringify(this.state.todoList));
  };

  toggleSTT = (i) => {
    this.setState((state) => {
      return state.todoList.map((el, index) =>
        i === index ? (el.isCompleted = true) : el
      );
    });
  };

  removeToDo = (i) => {
    console.log(i, this.state.todoList);
    this.setState({todoList: []});
    console.log(i, this.state.todoList);
    this.saveLocalTodoList();
  };

  render() {
    const criteria = this.state.filterCriteria;
    console.log('2 lan');

    const todoList =
      criteria === "all"
        ? this.state.todoList
        : this.state.todoList.filter((x) =>
            criteria === "completed" ? x.isCompleted : !x.isCompleted
          );
    return (
      <>
        <TodoForm onAdd={this.addTodo} onFilter={this.filterTodo} />
        <TodoList
          todoList={todoList}
          onToggleSTT={this.toggleSTT}
          onRemoveTodo={this.removeToDo}
        />
      </>
    );
  }
}

export default App;
