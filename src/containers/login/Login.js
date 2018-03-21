import React from 'react';
import {InputGroup, Row, Col, Button, Container, Input} from 'reactstrap';
import Logo from 'Resources/logo.svg';

import CenterView from 'Components/global/CenterView'

class App extends React.Component {
    render() {
        return (
            <Container>
                <br/>
                <CenterView>
                    <Logo/>
                </CenterView>
                <CenterView>
                    <InputGroup>
                        <Input placeholder="Email"/>
                    </InputGroup>
                </CenterView>
                <br/>
                <CenterView>
                    <InputGroup>
                        <Input placeholder="Password"/>
                    </InputGroup>
                </CenterView>
                <br/>
                <CenterView>
                    <Button color="primary" block>Авторизация</Button>
                </CenterView>
                <CenterView>
                    <div className="text-center">
                        <b> Ну или </b>
                    </div>
                </CenterView>
                <CenterView>
                    <Button color="info" block>Регистрация</Button>
                </CenterView>
            </Container>
        );
    }
}

export default App;