import React from 'react'
import {Row, Col, Container} from 'reactstrap';

export default class CenterView extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={{size: 12, offset: 0}}
                         md={{size: 6, offset: 3}}
                         lg={{size: 4, offset: 4}}>{this.props.children}</Col>
                </Row>
            </Container>
        )
    }
}