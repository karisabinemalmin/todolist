import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import DoneList from './DoneList'
import InputField from './InputField'
import update from 'react-addons-update'
import moment from 'moment'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      inputtext: '',
      donelist: JSON.parse(localStorage.getItem('donelist')) || [],
      response: ''
    }
  }

  // Update state when input field is changed
  filterUpdate(value) {
    this.setState({
      inputtext: value,
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      'todos', JSON.stringify(this.state.todos)
    );
    localStorage.setItem(
      'donelist', JSON.stringify(this.state.donelist)
    );
  }

  // update state when submit is clicked
  handleSubmit(value) {
    let response = ''
    if (this.state.inputtext.length < 1) {
      response = 'Please write something first'
    }

    this.setState({
      inputtext: '',
      todos: update(this.state.todos, {
        $push: [
          {'item': this.state.inputtext}
        ]
      }),
      response: response
    })

    value.preventDefault()
  }

  // Update when a todo is clicked
  handleClick(todo, index) {
    this.setState({
      donelist: update(this.state.donelist, {
        $push: [{
          'item': todo.item,
          'time': moment(new Date()).calendar()
        }],
      }),
      todos: update(this.state.todos, {
        $splice: [[index, 1]]
      })
    })
  }

  // Delete when an item is clicked
  handleDelete(todo, index) {
    this.setState({
      todos: update(this.state.todos, {
        $splice: [[index, 1]]
      })
    })
  }

  // Update when a done item is clicked
  handleDone(todo, index) {
    this.setState({
      donelist: update(this.state.donelist, {
        $splice: [[index, 1]]
      }),
      todos: this.state.todos.concat([todo])
    })
  }


  render() {
    return(
      <div>
        <h1 className="visually-hidden">To-do list</h1>

        <InputField
          inputText={this.state.inputtext}
          response={this.state.response}
          filterUpdate={this.filterUpdate.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />

        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
        />

        <DoneList
          data={this.state.donelist}
          handleClick={this.handleDone.bind(this)}
        />

      </div>
    )
  }
}
