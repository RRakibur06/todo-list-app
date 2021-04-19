/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <h1>Hello World!!!</h1>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
const textAreaStyles = {
  width: 235,
  margin: 5
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const x = document.createElement("button");
    const m = document.createElement("i");
    x.appendChild(m);
    m.classList.add("fa","fa-trash-alt");
    x.classList.add("mystyle","btn","btn-info");
    const todos = document.getElementById("ul");
    const el = document.createElement("li");
    el.innerText = this.state.userInput;
    el.addEventListener("click", () => {  
     el.classList.toggle("completed");}
);
    x.addEventListener("click", () => {  
      el.remove(); 
    }
);
    el.appendChild(x);
   todos.appendChild(el); 
    this.setState({
      userInput : ""
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() { 
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Input text'
        />
        <br />
        <button class="btn btn-info" style={{margin: "10px"}} onClick={this.handleSubmit}>Submit</button>
        <h1>My "To Do" List:</h1>
        <ul id="ul"></ul>
      </div>
    );
  }
}

export default App;