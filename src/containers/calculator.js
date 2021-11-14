import React from "react";
import "./calculator.css"

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentNumber: "",
      firstNumber: "",
      secondNumber: ""
    }
  }

  handleClick = (e) => {
    const eventClasses = e.target.classList
    const eventID = e.target.id
    if (eventClasses.contains("calculator-number")) {
      this.setState(prevState => ({
        currentNumber: prevState.currentNumber + e.target.innerText
      }))
    } else if (eventClasses.contains("calculator-operator")) {
      this.setState(prevState => ({
        firstNumber: prevState.currentNumber,
        currentNumber: ""
      }))
    } else if (eventID === "calculator-clear") {
      this.setState({
        currentNumber: ""
      })
    }
  }

  handleKeyUp = (e) => {
    const isNumber = Number.isInteger(parseFloat(e.key));
    const isBackspace = e.key === "Backspace";

    if (isNumber) {
      this.setState(prevState => ({
        currentNumber: prevState.currentNumber + e.key
      }))
    }
  }

  render() {
    return (
      <div>
        <table id="calculator" onClick={(e) => this.handleClick(e)}>
          <tr>
            <td value="result" id="calculator-result" colSpan="3">
              <input onKeyUp={(e) => this.handleKeyUp(e)} type='text' value={this.state.currentNumber} />
            </td>
            <td value="clear" id="calculator-clear">AC</td>
          </tr>
          <tr>
            <td type="button" value="1" className="calculator-number">1</td>
            <td type="button" value="2" className="calculator-number">2</td>
            <td type="button" value="3" className="calculator-number">3</td>
            <td type="button" value="/" className="calculator-operator">/</td>
          </tr>
          <tr>
            <td type="button" value="4" className="calculator-number">4</td>
            <td type="button" value="5" className="calculator-number">5</td>
            <td type="button" value="6" className="calculator-number">6</td>
            <td type="button" value="x" className="calculator-operator">x</td>
          </tr>
          <tr>
            <td type="button" value="7" className="calculator-number">7</td>
            <td type="button" value="8" className="calculator-number">8</td>
            <td type="button" value="9" className="calculator-number">9</td>
            <td type="button" value="-" className="calculator-operator">-</td>
          </tr>
          <tr>
            <td type="button" value="0" className="calculator-number">0</td>
            <td type="button" value="." className="calculator-number">.</td>
            <td type="button" value="=" id="calculator-equal">=</td>
            <td type="button" value="+" className="calculator-operator">+</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Calculator;