import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./Login.css"

export default function Login() {
    const [utcode, setUtcode] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return utcode === 'ut123' && password === '123';
    }

    function handleSubmit(event){
        event.preventDefault();
    }

  return (
    <div className='Login'>
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId='utcode'>
                <Form.Label>UT Code</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={utcode}
                    onChange={(e) => setUtcode(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Form>
      
    </div>
  )
}
