import React from 'react';
import {connect} from 'react-redux'
import {InputGroup, Button, Container, Input} from 'reactstrap';
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/login/LoginActions";
import { withRouter } from 'react-router-dom'

import CenterView from 'Components/global/CenterView'

@withRouter
@connect(state => ({
    isLoading: state.login.isLoading,
    authError: state.login.authError
}), {login: login})
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.login = this.login.bind(this);
        this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    }

    login() {
        this.props.login(this.state.email, this.state.password);
    }

    handleRegistrationClick() {
        this.props.history.push('/registration')
    };

    render() {
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

export default Login;