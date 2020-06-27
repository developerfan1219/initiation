import React, { useContext } from "react";
import { 
    Container, 
    Row, 
    Col,
    
} from 'reactstrap';
import NavHeader from "./Header"
import Hello from "./Hello"
import LoginForm from "./Login"
import { Context } from "../context/UserContext";
import {
    Redirect
} from 'react-router-dom'

function CustomLayout(props: any) {
    const userContext: any = useContext(Context);
    const {usertoken, setUser} = userContext;
        
    return (
            <Container>
                <Row className="bg-light">
                    <NavHeader/>
                </Row>
                
                <Row>
                    <Col >
                    </Col>
                    <Col xs="6">
                    {(usertoken == 'Guest')?
                        <LoginForm/>:
                        props.children
                    }
                    
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
    );
  }

export default CustomLayout;