import React from 'react';
import logo from '../images/logo.webp';
import { Row,Container,Col} from 'react-bootstrap';
import './TopBar.css';

const TopBar= (props)=> {
    return (
        <div >
            <Container fluid >
                <Row>
                    <Col className="TopBarCustomcss">
                     <span>   {props.title} </span>
                    </Col>
                </Row>
            </Container>
        
        </div>
    );
}

export default TopBar;