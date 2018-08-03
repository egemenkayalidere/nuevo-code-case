import * as React from 'react';
import {Col, Row} from 'react-bootstrap';
import {BooksList} from '../components/BooksList';
import {Header} from '../components/Header';

class Home extends React.Component {
    public render() {
        return (
            <Row className="show-grid">
                <Col md={12}>
                    <Header/>
                    <BooksList/>
                </Col>
            </Row>
        );
    }
}

export default Home;
