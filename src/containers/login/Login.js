import React from 'react';
import {connect} from 'react-redux'
import {InputGroup, Button, Container, Progress, Input} from 'reactstrap';
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/LoginActions";

import CenterView from 'Components/global/CenterView'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {email: '', password: ''};

        this.login = this.login.bind(this);
    }

    login() {
        this.props.login(this.state.email, this.state.password);
        this.props.history.push('/dashboard');
    }

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
                    <Progress bar animated color="success" value="100">Animated Stripes</Progress>
                    <div className="text-center">
                        Token: {this.props.token}
                        AuthError: {this.props.authError}
                    </div>
                </CenterView>
                <CenterView>
                    <Button color="info" block>Регистрация</Button>
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