import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

export const Footer = () => {
    return (
        <div>
            <Container fluid className='footer text-center'>
                <Row>
                    <Col md={6} sm={12}>
                        <p>copyright@2021 E-shop  all rights reserved .</p>
                    </Col>
                    <Col md={6} sm={12}>
                        <p>designed by code 4Education .</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;