import React from 'react';
import {InputGroup, Row, Col, Button, Container, InputGroupAddon, Input} from 'reactstrap';

class App extends React.Component {
    render() {
        return (
            <Container>
                <br/>
                <Row>
                    <Col xs={1} sm={{size: 5, order: 2, offset: 3}}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="Email"/>
                        </InputGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={6} sm={{size: 5, order: 2, offset: 3}}>
                        <InputGroup>
                            <Input placeholder="Password"/>
                        </InputGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={6} sm={{size: 2, order: 1, offset: 3}}>
                        <Button color="primary"  block>Login</Button>
                    </Col>
                    <Col xs={6} sm={{size: 2, order: 2, offset: 3}}>
                        <span> OR </span>
                    </Col>
                    <Col xs={6} sm={{size: 2, order: 3, offset: 3}}>
                        <Button color="info"  block>Register</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;