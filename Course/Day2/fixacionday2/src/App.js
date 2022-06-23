import React from "react";
import "./App.css";

class Forms extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      statesFavorite: "",
      statesInputs: "",
      statesInputsEmail: '',
      statesInputsCheckBox: '',
      statesTextArea: "",
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Forms controlled Component</h1>
        <form>
          <fieldset>

          <label>
            <legend>Course</legend>
              <select
                name="statesFavorite"
                value={this.state.value}
                onChange={this.handleInputChange}
                >
                <option value="Fundamentos">Fundamentos</option>
                <option value="FrontEnd">Front-End</option>
                <option value="BackEnd">Back-End</option>
                <option value="Ciencias Da Computacão">
                  Ciências da Computação
                </option>
              </select>
            </label>
          </fieldset>
          <hr />
          <fieldset>
            <label>
              Email:
              <input
                type="email"
                name="statesInputsEmail"
                value={this.state.statesInputsEmail}
                onChange={this.handleInputChange}
                ></input>
            </label>
            <br />
            <label>
              Comentário:
              <input type="text"
                name="statesInputs"
                value={this.state.statesInputs}
                onChange={this.handleInputChange}></input>
            </label>
          </fieldset>
          <hr />
          <fieldset>
            <br />
            <label>
              <textarea
                name="statesTextArea"
                value={this.state.statesTextArea}
                onChange={this.handleInputChange}
                ></textarea>
            </label>
            <br />
            <label>
              <input type="checkbox"
                name="statesInputsCheckBox"
                value={this.state.statesInputsCheckBox}
                onChange={this.handleInputChange}></input>
                Dados com Vericidade?
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Forms;
