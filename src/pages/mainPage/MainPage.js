import React from 'react'
import { Button, Container, Form, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch} from "react-redux";
import { setName, setUsername, setEmail } from "../../store/AuthSlice";
import {addUserAction} from "../../reducer/actions";

function MainPage() {
    const { name, username, email } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const changeTitleFunc = (event) => {
        const { name, value } = event.target
        switch (name) {
            case 'name':
                dispatch(setName(value))
                break
            case 'username':
                dispatch(setUsername(value))
                break
            case 'email':
                dispatch(setEmail(value))
                break
            default: break
        }
    }
    const addUser = (event) => {
        event.preventDefault()
        if (/\d+/.test(name)) {
            console.log(name)
            return  alert('Имя должно содержать только буквы, попробуйте еще раз')
        } else if (/\d+/.test(username)) {
            console.log(username)
            return alert('Имя пользователя должно содержать только буквы, попробуйте еще раз')
        } else if (!email.includes('@gmail.com')) {
            return alert('Почтовый адрес должен содержать @gmail.com, попробуйте еще раз')
        } else {
            const user = { name, username, email }
            dispatch(addUserAction(user))
        }
    }

    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={changeTitleFunc}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={changeTitleFunc}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={changeTitleFunc}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100">
                            register user
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
export default MainPage