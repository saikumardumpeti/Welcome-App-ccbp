import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  onSubscribed = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="container">
        <Welcome />
        {isSubscribe ? (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        ) : (
          <button type="button" className="button" onClick={this.onSubscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default App
