import logo from './logo.svg';
import './App.css';
import LoadBackground from './videoList.js';
import Sample from './sample.js';


import React, { Component } from 'react'
import video from './video/VID-20150514-WA0007.mp4'

const ObjectTest = {
    1: {
        id : 1,
        name:'VID-20150508-WA0004.mp4'
    },
    3: {
        id: 3,
        name:'VID-20150514-WA0007.mp4'
    }
}

class Display extends Component {
  render() {
    return (
      <div className="App">
      <p>hello</p>
      <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
    );
  }   
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Sample/>

      </header>
    </div>
  );
}

export default App;
