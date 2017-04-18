import React, { Component } from 'react'

export default class InputField extends Component {

  render() {

    const {inputText, handleSubmit, filterUpdate} = this.props

    return(
      <form>
        <input
          type="text"
          ref="myValue"
          value={inputText}
          placeholder="Type todo + enter"
          onChange={() => {
           filterUpdate(this.refs.myValue.value)
          }}
        />

        <button
          type="submit"
          className="submit"
          onClick={handleSubmit}
        >
          Add todo
        </button>
      </form>
    )
  }
}
