import React, { useState } from 'react';
import { Card, CardTitle, Form, FormGroup, Label, Input, Button, Alert, FormFeedback } from 'reactstrap';
import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

export default function LoginForm() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onDismiss = () => setShowAlert(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setShowAlert(true)
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!')
      }

      const { token, user } = await response.json()
      console.log(user)
      Auth.login(token)

    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setUserFormData({
      email: '',
      password: ''
    })
  }

  return (
    <>
      <Card body>
        <CardTitle tag="h3">Login</CardTitle>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert color="danger" isOpen={showAlert} toggle={onDismiss}>
            Something went wrong with your login credentials!
          </Alert>

          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='text'
              placeholder='Your email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <FormFeedback className='invalid-feedback'>Email is required!</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <FormFeedback className='invalid-feedback'>Password is required!</FormFeedback>
          </FormGroup>

          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            color='secondary'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}