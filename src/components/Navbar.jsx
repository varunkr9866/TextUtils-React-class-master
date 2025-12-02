import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        // No useState in original component, but constructor is required
        this.state = {};

        // Binding methods (if any event handlers were needed)
        this.handleToggleMode = this.handleToggleMode.bind(this);
    }

    // Event listener method for toggle
    handleToggleMode() {
        this.props.toggleMode();
    }

    // useEffect equivalent if needed
    componentDidMount() {
        // Example:
        // console.log("Navbar mounted");
    }

    componentDidUpdate(prevProps) {
        // Example: react to mode change
        if (prevProps.mode !== this.props.mode) {
            // console.log("Navbar mode updated");
        }
    }

    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{this.props.title}</Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{this.props.aboutText}</Link>
                            </li>
                        </ul>

                        <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input
                                className="form-check-input"
                                onClick={this.handleToggleMode}
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                Enable DarkMode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};
