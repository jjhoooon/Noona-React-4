import React, { useState } from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'

const SearchBox = ({ setSearchName }) => {

    const [foundName, getFoundName] = useState("")

    const findName = (event) => {
        event.preventDefault()
        setSearchName(foundName)
    }

    return (
        <Form onSubmit={findName}>
            <Row>
                <Col lg={10}>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => getFoundName(event.target.value)} />
                </Col>
                <Col lg={2}>
                    <Button onClick={findName}>찾기</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox