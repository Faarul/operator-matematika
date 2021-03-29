// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  tambah = () => {
    // console.log(this.state.counter);
    this.setState({ counter: this.state.counter + 1 })
  }
  kurang = () => {
    // console.log(this.state.counter);
    this.setState({ counter: this.state.counter - 1 })
  }
  reset = () => {
    // console.log(this.state.counter);
    this.setState({ counter: 0 })
  }


  render() {
    const { counter } = this.state
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{counter}</p>
        <ButtonGroup>
          <Button onClick={this.tambah}>Tambah</Button>
          <Button onClick={this.reset}>Reset</Button>
          <Button onClick={this.kurang}>Kurang</Button>
        </ButtonGroup>
      </>
    )
  }
}

export default Counter;