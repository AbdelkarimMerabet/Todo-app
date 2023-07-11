// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Button, Row, Col } from 'react-bootstrap'

function Todo(props) {
return (
<div>
    <Row className='mb-2 pb-1 mt-2 border-bottom'>
        <Col xs={10} sm={10} md={10} lg={10}>
            {/* eslint-disable-next-line react/prop-types */}
            <div className='mt-3 full' style={{textDecoration : props.todo.complete ? "line-through": "" ,color : props.todo.complete ? "red": ""}} onClick={props.toggelComplete}> {props.todo.text} </div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
            {/* eslint-disable-next-line react/prop-types */}
            <Button onClick={props.onDelete}  variant="danger">x</Button>
        </Col>
    </Row>
</div>
)
}

export default Todo