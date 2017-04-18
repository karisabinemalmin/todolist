import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import DoneList from './DoneList'
import InputField from './InputField'
import update from 'react-addons-update'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.data,
      inputtext: '',
      donelist: []
    }
  }

  handleClick(todo, index) {
    this.setState({
      donelist: this.state.donelist.concat([todo]),
      todos: update(this.state.todos, {$splice: [[index, 1]]})
    })
  }

  doneListClick(todo, index) {
    this.setState({
      donelist: update(this.state.donelist, {$splice: [[index, 1]]}),
      todos: this.state.todos.concat([todo])
    })
  }

  filterUpdate(value) {
    this.setState({
      inputtext: value
    });
  }

  handleSubmit(value) {
    const newFlowers = this.state.todos
    .concat([
      {
        item: this.state.inputtext
      }
    ])
    this.setState({
      inputtext: '',
      todos: newFlowers
    })
    value.preventDefault()
  }

  render() {
    return(
      <div>
        <h1 className="visually-hidden">To-do list</h1>

        <InputField
          inputText={this.state.inputtext}
          filterUpdate={this.filterUpdate.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />

        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick.bind(this)}
        />

        <DoneList
          data={this.state.donelist}
          handleClick={this.doneListClick.bind(this)}
        />
      </div>
    )
  }
}
