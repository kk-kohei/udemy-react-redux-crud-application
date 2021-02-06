import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am clicked!")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusbutton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusbutton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count } </div>
        <button onClick={this.handlePlusbutton}>+1</button>
        <button onClick={this.handleMinusbutton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
