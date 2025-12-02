import React, { Component } from 'react';

export default class About extends Component {

    constructor(props) {
        super(props);
        // (4) Replacing useState with a single state variable
        this.state = {
            myStyle: {
                color: props.mode === 'dark' ? 'white' : '#042743',
                backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
            }
        };
    }

    // (7) If useEffect was needed, logic would go here
    componentDidMount() {
        // Example:
        // console.log("About component mounted");
    }

    componentDidUpdate(prevProps) {
        // Update style if mode changes
        if (prevProps.mode !== this.props.mode) {
            this.setState({
                myStyle: {
                    color: this.props.mode === 'dark' ? 'white' : '#042743',
                    backgroundColor: this.props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
                }
            });
        }
    }

    // (6) All JSX written inside render()
    render() {
        return (
            <div className="container">
                <h1
                    className="my-3"
                    style={{ color: this.props.mode === 'dark' ? 'white' : '#042743' }}
                >
                    About Us
                </h1>

                <div className="accordion" id="accordionExample">
                    
                    {/* Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                style={this.state.myStyle}
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={this.state.myStyle}>
                                Textutils gives you a way to analyze your text quickly and efficiently.
                                Be it word count, character count or more.
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                style={this.state.myStyle}
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={this.state.myStyle}>
                                TextUtils is a free character counter tool that gives instant word and
                                character statistics for any text.
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                style={this.state.myStyle}
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={this.state.myStyle}>
                                This tool works in all major browsers like Chrome, Firefox, Safari, Opera,
                                and more.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
