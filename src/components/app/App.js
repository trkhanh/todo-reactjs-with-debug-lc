import React from "react";
import TodoForm from "../todo-form/TodoForm";
import TodoList from "../todo-list/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Init st
    this.state = { todoList: [], filterCriteria: "all" };
  }

  componentDidMount() {
    // console.log('componentDidMount', window.renderTime )
    // this.setState({todoList: this.getTodoList()});
  }

  getTodoList = () => {
    const todos = localStorage.getItem("todo-list")
    return todos ? JSON.parse(todos) : [];
  };

  // cb
  filterTodo = (filterCriteria) => {
    this.setState({ filterCriteria });
  };

  // cb
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
    window.renderTime = window.renderTime + 1;
    const criteria = this.state.filterCriteria;
    console.log('render',window.renderTime)

    // const todoList =
    //   criteria === "all"
    //     ? this.state.todoList
    //     : this.state.todoList.filter((x) =>
    //         criteria === "completed" ? x.isCompleted : !x.isCompleted
    //       );

    return (
      <h1>Debug</h1>
      // <>
      //   <TodoForm onAdd={this.addTodo} onFilter={this.filterTodo} />
      //   <TodoList
      //     todoList={todoList}
      //     onToggleSTT={this.toggleSTT}
      //     onRemoveTodo={this.removeToDo}
      //   />
      // </>
    );
  }
}

export default App;
