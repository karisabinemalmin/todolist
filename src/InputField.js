import React, { Component } from 'react'

export default class InputField extends Component {

  render() {

    const { inputText, response, handleSubmit, filterUpdate } = this.props

    return(
      <form>

        <input
          type="text"
          ref="myValue"
          value={inputText}
          placeholder="What do you need to do?"
          onChange={() => {
           filterUpdate(this.refs.myValue.value)
          }}
        />

        <button
          type="submit"
          className="submit"
          onClick={handleSubmit}
          >
            Add
        </button>

        <p className="response">{response}</p>

      </form>

    )
  }
}
