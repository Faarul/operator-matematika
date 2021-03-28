import { Component } from "react";
// import Dropdown from './dropDown'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      nilai1: null,
      nilai2: null,
      operator: null,
      hasil: null
    }
  }

  handlerSubmit(event) {
    event.preventDefault();
    const { name, value } = event.target
    // console.log(event.target.nilai1.value);
    let nilai1 = parseInt(event.target.nilai1.value);
    let nilai2 = parseInt(event.target.nilai2.value);
    let operator = (event.target.operator.value);

    let hasil;
    // hasil = nilai1 +operator+ nilai2;
    switch (operator) {
      case '+':
        hasil = nilai1 + nilai2;
        break;
      case '-':
        hasil = nilai1 - nilai2;
        break;
      case '*':
        hasil = nilai1 * nilai2;
        break;
      case '/':
        hasil = nilai1 / nilai2;
        break;
    }

    this.setState({
      [name]: value,
      nilai1: nilai1,
      nilai2: nilai2,
      operator: operator,
      hasil: hasil
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmit.bind(this)}>
          <FormGroup>
            <Input type="text" name="nilai1" placeholder="Masukan Nilai 1" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="nilai2" placeholder="Masukan Nilai 2" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect" onClick={this.handlerSubmit}>Operation</Label>
            <Input type="select" name="operator">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </Input>
          </FormGroup>
          <Button>Hitung</Button>
        </Form>
        <h1>{this.state.hasil}</h1>
      </div>
    )
  }
}

export default Calculator;