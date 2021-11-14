import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <table id="calculator">
          <tr>
            <td id="result" colSpan="3">Result field</td>
            <td id="clear">AC</td>
          </tr>
          <tr>
            <td id="1" className="number">1</td>
            <td id="2" className="number">2</td>
            <td id="3" className="number">3</td>
            <td id="divide" className="operator">/</td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td className="number">5</td>
            <td className="number">6</td>
            <td id="multiply" className="operator">x</td>
          </tr>
          <tr>
            <td className="number">7</td>
            <td className="number">8</td>
            <td className="number">9</td>
            <td id="subtract" className="operator">-</td>
          </tr>
          <tr>
            <td className="number">0</td>
            <td className="number">.</td>
            <td id="equal">=</td>
            <td id="add" className="operator">+</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Calculator;