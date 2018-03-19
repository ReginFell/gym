import React from 'react';
import {InputGroup, Row, Col, InputGroupAddon, Input} from 'reactstrap';

class App extends React.Component {
    render() {
        return (
            <div className="component-app">

                <Row className="text-center">
                    <Col xs={1} md={4}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="Email"/>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={4}>
                        <InputGroup>
                            <Input placeholder="Password"/>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;