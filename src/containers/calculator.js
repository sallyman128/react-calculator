import React from "react";
import "./calculator.css"
import History from "./history";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      history: []
    }
  }

  handleClick = (e) => {
    const eventClasses = e.target.classList
    const eventID = e.target.id
    if (eventClasses.contains("calculator-number")) {
      this.setState(prevState => ({
        input: prevState.input + e.target.innerText
      }))
    } else if (eventClasses.contains("calculator-operator")) {
      this.setState(prevState => ({
        input: prevState.input + " " + e.target.innerText + " ",
      }))
    } else if (eventID === "calculator-clear") {
      this.setState({
        input: "",
      })
    } else if (eventID === "calculator-equal") {
      const result = eval(this.state.input)
      this.setState(prevState => ({
        input: "",
        history: [...prevState.history, prevState.input + " = " + Number.parseFloat(result).toFixed(2)]
      }))
    }
  }

  handleKeyUp = (e) => {
    const isNumber = Number.isInteger(parseFloat(e.key));
    const isBackspace = e.key === "Backspace";

    if (isNumber) {
      this.setState(prevState => ({
        input: prevState.input + e.key
      }))
    } else if (isBackspace) {
      this.setState(prevState => ({
        input: prevState.input.slice(0,-1)
      }))
    }
  }

  render() {
    return (
      <div>
        <table id="calculator" onClick={(e) => this.handleClick(e)}>
          <tr>
            <td colSpan="3">
              <input id="calculator-input" onKeyUp={(e) => this.handleKeyUp(e)} type='text' value={this.state.input} />
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
            <td type="button" value="*" className="calculator-operator">*</td>
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
        <ul>
          {this.state.history.map( calculation => <li>{calculation}</li>)}
        </ul>
      </div>
    )
  }
}

export default Calculator;