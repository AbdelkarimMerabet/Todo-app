import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import shortid from "shortid";


function TodoForm(props) {
    const [text , setText ] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.onSubmit({
            id:shortid.generate(),
            text: text,
            complete: false,
        });
        setText("");
    };
    const handleChange = (e)=>{
        setText(e.target.value);
    };
return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <Row>
                    {/* Input Task */}
                    <Col className="mb-3" xs={12} sm={12} md={10} lg={10}>
                        <input  
                            type="text" 
                            onChange={handleChange} 
                            value={text}
                        />
                    </Col>
                    {/* Button Add to Task */}
                    <Col  xs={4} sm={4} md={2} lg={2}>
                        <Button
                            variant="outline-primary" 
                            onClick={handleSubmit} 
                        >
                            Add Task 
                        </Button>
                    </Col>
                </Row>
            </form>
        </div>
    </>
)
}

export default TodoForm