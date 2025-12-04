import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default class TextForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleLoClick = this.handleLoClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleExtraSpaces = this.handleExtraSpaces.bind(this);
  }

  // (7) Lifecycle equivalents (optional)
  componentDidMount() {
    // console.log("TextForm mounted");
  }

  componentDidUpdate(prevProps) {
    // If mode changes, you could react here
    // if (prevProps.mode !== this.props.mode) console.log("Mode changed");
  }

  handleUpClick() {
    const newText = this.state.text.toUpperCase();
    this.setState({ text: newText });
    this.props.showAlert("Converted to uppercase!", "success");
  }

  handleLoClick() {
    const newText = this.state.text.toLowerCase();
    this.setState({ text: newText });
    this.props.showAlert("Converted to lowercase!", "success");
  }

  handleClearClick() {
    this.setState({ text: "" });
    this.props.showAlert("Text Cleared!", "success");
  }

  handleOnChange(event) {
    this.setState({ text: event.target.value });
  }

  handleCopy() {
    navigator.clipboard.writeText(this.state.text);
    this.props.showAlert("Copied to Clipboard!", "success");
  }

  handleExtraSpaces() {
    const newText = this.state.text.split(/[ ]+/).join(" ");
    this.setState({ text: newText });
    this.props.showAlert("Extra spaces removed!", "success");
  }

  render() {
    return (
      <>
        <div
          className="container"
          style={{ color: this.props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1 className="mb-4">{this.props.heading}</h1>

          <div className="mb-3">
            <textarea
              className="form-control"
              value={this.state.text}
              onChange={this.handleOnChange}
              style={{
                backgroundColor:
                  this.props.mode === "dark" ? "#13466e" : "white",
                color: this.props.mode === "dark" ? "white" : "#042743",
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>

          {/* Buttons */}
          <button
            disabled={this.state.text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={this.handleUpClick}
          >
            Convert to Uppercase
          </button>

          <button
            disabled={this.state.text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={this.handleLoClick}
          >
            Convert to Lowercase
          </button>

          <button
            disabled={this.state.text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={this.handleClearClick}
          >
            Clear Text
          </button>

          <button
            disabled={this.state.text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={this.handleCopy}
          >
            Copy Text
          </button>

          <button
            disabled={this.state.text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={this.handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>

        {/* Summary Section */}
        <div
          className="container my-3"
          style={{ color: this.props.mode === "dark" ? "white" : "#042743" }}
        >
          <h2>Your text summary</h2>

          <p>
            {
              this.state.text
                .split(/\s+/)
                .filter((element) => element.length !== 0).length
            }{" "}
            words and {this.state.text.length} characters
          </p>

          <p>
            {0.008 *
              this.state.text
                .split(/\s+/)
                .filter((element) => element.length !== 0).length}{" "}
            Minutes read
          </p>

          <h2>Preview</h2>
          <p>
            {this.state.text.length > 0
              ? this.state.text
              : "Nothing to preview!"}
          </p>
        </div>
      </>
    );
  }
}
