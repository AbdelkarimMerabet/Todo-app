// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
import TodoForm from './components/TodoForm'

import './App.css'
import Todo from './components/Todo';


function App() {

  let [ todos, setTodos ] = useState([]);
  const [ todoToShow, setTodoToShow ] = useState("All");
  const addTodo = (todo)=>{
    setTodos([ todo, ...todos]);
  };
  const handleDelete = (id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id ))
  }
  const updateTodoToShow = (s)=>{
    setTodoToShow(s);
  };
  if ( todoToShow === "Active" ) {
    todos = todos.filter( (todo)=> !todo.complete);
  }else if (todoToShow === "Complete") {
    todos = todos.filter( (todo)=> todo.complete);
  }

  const toggelComplete = (id)=>{
    setTodos(
      todos.map( (todo)=>{
        if (todo.id === id ) {
          return{
            ...todo,
            complete : !todo.complete,
          }
        }
        else {
          return todo;
        }
      })
    )
  }



  return (
    <div>
      <Container>
        {/* title */}
        <div className="header">
          <h1>Todo List App</h1>
          <p border="warning">Do it now </p>
        </div>

        {/* input and add task */}
        <TodoForm onSubmit={addTodo}/>


        {/* filter buttons */}
        <Row className='justify-content-center mt-5' >
            <Col xs={4} sm={2} md={2} lg={2} >
              <Button onClick={ ()=>updateTodoToShow("All") } >All</Button>
            </Col>
            <Col xs={4} sm={2} md={2} lg={2} >
              <Button onClick={ ()=>updateTodoToShow("Active") } >Active</Button>
            </Col>
            <Col xs={4} sm={2} md={2} lg={2} >
              <Button onClick={ ()=>updateTodoToShow("Complete") } >Complete</Button>
            </Col>
        </Row>



        {/* Table of Tasks */}
        <Row className='mt-1  border-bottom border-dark ' >
            <Col  xs={10} sm={10} md={10}  lg={10}>
              <h6>Task Name</h6>
            </Col>
            <Col  xs={2} sm={2} md={2}  lg={2}>
              <h6>Remove</h6>
            </Col>
        </Row>
        
        {
          todos.map((todo)=>(
            // eslint-disable-next-line react/jsx-key
              <Todo  
                key={todo.id} 
                todo={todo} 
                onDelete={ ()=> handleDelete(todo.id)}
                toggelComplete = { ()=>{toggelComplete(todo.id)} }
              />
          ))
        }
      </Container>
    </div>
  )
}

export default App