
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default class Alert extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.capitalize = this.capitalize.bind(this);
    }

    capitalize(word) {
        if (!word) return "";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    componentDidMount() {
        // console.log("Alert mounted");
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.alert !== this.props.alert) console.log("Alert updated");
    }

    render() {
        return (
            <div style={{ height: '50px' }}>
                {this.props.alert && (
                    <div
                        className={`alert alert-${this.props.alert.type} alert-dismissible fade show`}
                        role="alert"
                    >
                        <strong>{this.capitalize(this.props.alert.type)}</strong>:{" "}
                        {this.props.alert.msg}
                    </div>
                )}
            </div>
        );
    }
}
