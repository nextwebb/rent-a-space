import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SignIn () {

    return(
       <Container fluid>
           <Row className="justify-content-md-center" >
               <Col className="split-left"  sm md={4}  >

               </Col>
               <Col className="split-right "  xl sm md={8} >
                <div style={{position:"relative", top:"20%", marginLeft:"10%"}}>
                    <Col className="createTitle" style={{width:"200px"}}>
                        <h2>Create your Account.</h2>
                    </Col>

                    <Col>
                        <Form>
                            <Row>
                                <Col md="8">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control size="lg" type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="8">
                                    <Form.Group controlId="formBasicPassword" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control size="lg" type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="8">
                            <Button className="button" size="lg" type="submit" block style={{backgroundColor:"#1E1E64", border:"1px solid #1E1E64"}}>
                                Sign Up
                            </Button>
                            </Col>
                            </Row>
                        </Form>
                    </Col>
                </div>
               </Col>
           </Row>
       </Container>
    )
}

export default SignIn