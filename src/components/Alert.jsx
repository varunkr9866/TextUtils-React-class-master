
import React, { Component } from 'react';

export default class Alert extends Component {

    constructor(props) {
        super(props);

        // No state needed, but constructor required by rules
        this.state = {};

        // Method binding
        this.capitalize = this.capitalize.bind(this);
    }

    // Helper function inside class
    capitalize(word) {
        if (!word) return "";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // Lifecycle - replacing useEffect logic if needed
    componentDidMount() {
        // Example:
        // console.log("Alert mounted");
    }

    componentDidUpdate(prevProps) {
        // Example: react when alert changes
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
