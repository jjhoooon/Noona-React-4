import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({ item }) => {
    return (
        <Row className='contact-item-box'>
            <Col lg={2}>
                <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdOiTQlfRLkk4IjENg9JKWiA_uAKi-AzqkvNX88PpZoCK-FbeQVCaJkur7g&s' />
            </Col>
            <Col lg={10}>
                <div className='item-info'>{item.name}</div>
                <div className='item-info'>{item.phoneNumber}</div>
            </Col>
        </Row>
    )
}

export default ContactItem