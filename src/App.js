import React, { Component } from 'react'
import Tour from 'reactour'
import logo from './logo.svg'
import './App.css'

const steps = [
  {
    selector: '.first-step',
    content: 'This is my first Step',
  },
]

class App extends Component {
  state = {
    isTourOpen: true,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code className="first-step">src/App.js</code>{' '}
          and save to reload.
        </p>
        <Tour
          steps={steps}
          isOpen={this.state.isTourOpen}
          onRequestClose={() => this.setState({ isTourOpen: false })}
        />
      </div>
    )
  }
}

export default App
