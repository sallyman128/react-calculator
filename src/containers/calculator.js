import React from "react";
import "./calculator.css"

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentNumber: "",
      firstNumber: ""
    }
  }

  handleClick = (e) => {
    const eventClasses = e.target.classList
    const eventID = e.target.id
    if (eventClasses.contains("number")) {
      this.setState(prevState => ({
        currentNumber: prevState.currentNumber + e.target.innerText
      }))
    } else if (eventClasses.contains("operator")) {
      this.setState(prevState => ({
        firstNumber: prevState.currentNumber,
        currentNumber: ""
      }))
    } else if (eventID === "clear") {
      this.setState({
        currentNumber: ""
      })
    }
  }

  render() {
    return (
      <div>
        <table id="calculator" onClick={(e) => this.handleClick(e)}>
          <tr>
            <td id="result" colSpan="3">{this.state.currentNumber}</td>
            <td id="clear" className="button">AC</td>
          </tr>
          <tr>
            <td id="1" className="number button">1</td>
            <td id="2" className="number button">2</td>
            <td id="3" className="number button">3</td>
            <td id="divide" className="operator button">/</td>
          </tr>
          <tr>
            <td className="number button">4</td>
            <td className="number button">5</td>
            <td className="number button">6</td>
            <td id="multiply" className="operator button">x</td>
          </tr>
          <tr>
            <td className="number button">7</td>
            <td className="number button">8</td>
            <td className="number button">9</td>
            <td id="subtract" className="operator button">-</td>
          </tr>
          <tr>
            <td className="number button">0</td>
            <td className="number button">.</td>
            <td id="equal">=</td>
            <td id="add" className="operator button">+</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Calculator;