import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {InputGroup, Button, Container, Progress, Input} from 'reactstrap';
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/LoginActions";

import CenterView from 'Components/global/CenterView'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            redirect: false
        };

        this.login = this.login.bind(this);
        this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    }

    login() {
        this.props.login(this.state.email, this.state.password);
    }

    handleRegistrationClick() {
        this.state.redirect = true;
    };

    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect);
            return <Redirect to="/registration" push={true}/>
        }

        return (
            <Container className="App">
                <br/>
                <CenterView>
                    <Logo/>
                </CenterView>
                <CenterView>
                    <InputGroup>
                        <Input onChange={(event) => this.state.email = event.target.value} placeholder="Email"/>
                    </InputGroup>
                </CenterView>
                <br/>
                <CenterView>
                    <InputGroup>
                        <Input type="password" onChange={(event) => this.state.password = event.target.value}
                               placeholder="Password"/>
                    </InputGroup>
                </CenterView>
                <br/>
                <CenterView>
                    <Button color="primary" onClick={this.login} block>Авторизация</Button>
                </CenterView>
                <CenterView>
                    <div className="text-center">
                        Token: {this.props.token}
                        AuthError: {this.props.authError}
                    </div>
                </CenterView>
                <CenterView>
                    <Button color="info" onClick={this.handleRegistrationClick} block>Регистрация</Button>
                </CenterView>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.login.isLoading,
        authError: state.login.authError,
        token: state.login.token
    };
};

const mapActionsToProps = {
    login: login
};

export default connect(mapStateToProps, mapActionsToProps)(Login);