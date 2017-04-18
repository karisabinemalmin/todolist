import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const data = [
  {
      "item": "🍉 Eat",
  },
  {
      "item": "😊 Sleep",
  },
  {
      "item": "😍 Code",
  },
]

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
