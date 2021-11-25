import React from 'react'
// import img1 from '../images/slide1.jpg'
// import img2 from '../images/slide2.jpg'
import { Carousel, Container,Row ,Col } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Container fluid className='carousel '>
            <Carousel variant="dark">
  <Carousel.Item interval={3000}>
  <Carousel.Caption>
      <Row className='Row'>
         <Col md={6} sm={12}> <h1>women</h1>
          <h2>52% discount for this season</h2>
          <button className='buttons'>our product</button></Col>
      </Row>
    </Carousel.Caption>
    <div className='img-div1'></div>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Carousel.Caption>
      <Row className='Row'>
         <Col md={6} sm={12}> <h1>E-shop</h1>
          <h2>with working card and pay pal</h2>
        <button className='buttons'>our product</button></Col>
      </Row>
    </Carousel.Caption>
    <div className='img-div2'></div>
  </Carousel.Item>
</Carousel>
            </Container>
        </div>
    )
}

export default Header
