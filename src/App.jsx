import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import About from './components/About.jsx';
import Alert from './components/Alert.jsx';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: 'light', 
            alert: null
        };

        this.showAlert = this.showAlert.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = this.state.mode === 'dark' ? '#042743' : 'white';
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.mode !== this.state.mode) {
            document.body.style.backgroundColor = this.state.mode === 'dark' ? '#042743' : 'white';
        }
    }


    showAlert(message, type) {
        this.setState({ alert: { msg: message, type: type } });

        // Clear alert after 1.5 seconds
        setTimeout(() => {
            this.setState({ alert: null });
        }, 1500);
    }

    toggleMode() {
        if (this.state.mode === 'light') {
            this.setState({ mode: 'dark' });
            this.showAlert("Dark mode has been enabled", "success");
        } else {
            this.setState({ mode: 'light' });
            this.showAlert("Light mode has been enabled", "success");
        }
    }

    render() {
        return (
            <>
                <Navbar
                    title="TextUtils"
                    mode={this.state.mode}
                    toggleMode={this.toggleMode}
                    key={new Date()}
                />
                <Alert alert={this.state.alert} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path="/about">
                            <About mode={this.state.mode} />
                        </Route>
                        <Route exact path="/">
                            <TextForm
                                showAlert={this.showAlert}
                                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                                mode={this.state.mode}
                            />
                        </Route>
                    </Routes>
                </div>
            </>
        );
    }
}
