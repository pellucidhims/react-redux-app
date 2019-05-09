import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      rotating: true
    };
    this.controlRotation=this.controlRotation.bind(this);
  }

  controlRotation(){
    console.log("Clickedddd");
    this.setState({
      rotating: !this.state.rotating
    });
  }

  render(){
    console.log("this", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <div
            onClick={this.controlRotation}
          >
          <img
            src={logo}
            className={"App-logo"+(this.state.rotating?"":" App-logo-paused")}
            alt="logo"
          />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}
