import react from "react";

class CounterClass extends react.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this)
    this.state = {
        number: 0
    }
  }
  increment() {
    this.setState({
       number: this.state.number + 1
       //number: this.state.number 
    })
  }
  render() {
    return (
        <div>
            <h1>Counter = {this.state.number}</h1>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
  }
}

export default CounterClass;