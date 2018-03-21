import React from 'react'
import {Row, Col, Container} from 'reactstrap';

export default class CenterView extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={{size: 10, offset: 1}}
                         md={{size: 3, offset: 6}}
                         lg={{size: 3, offset: 5}}>{this.props.children}</Col>
                </Row>
            </Container>
        )
    }
}