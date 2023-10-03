import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // Fungsi untuk menambah nilai counter
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // Fungsi untuk mengurangi nilai counter
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      
      <header className='App-header'>
      <div className='App'>
        <h1>Pengenalan React Tingkat Dasar</h1>
        <h2>Counter</h2>
        <h1>Nilai: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
              </header>

      
    );
  }
}


export default App;
