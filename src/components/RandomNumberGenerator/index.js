import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {numbers: 0}

  onEvenOrOdd = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState({numbers: number})
  }

  render() {
    const {numbers} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onEvenOrOdd}>
            Generate
          </button>
          <p className="number"> {numbers} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
