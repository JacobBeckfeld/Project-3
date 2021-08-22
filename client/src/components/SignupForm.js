import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardTitle, Form, FormGroup, Label, Input, FormFeedback, Button, Alert } from 'reactstrap';
import { createUser } from '../utils/API';
import Auth from '../utils/auth';

export default function SignupForm() {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', battletag: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const onDismiss = () => setShowAlert(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const validBattletag = new RegExp(
    '/(^([A-zÀ-ú][A-zÀ-ú0-9]{2,11})|(^([а-яёА-ЯЁÀ-ú][а-яёА-ЯЁ0-9À-ú]{2,11})))(#[0-9]{4,})$/'
  )

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setShowAlert(true)
    }
    if (!validBattletag.test(userFormData.battletag) || (!userFormData.battletag==='')) {
      event.preventDefault()
      event.stopPropagation()
      setShowAlert(true)
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!')
      }

      const { token, user } = await response.json()
      console.log(user)
      Auth.login(token)
      history.push('/dashboard')

    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      battletag: ''
    })
  }

  return (
    <>
      <Card body>
        <CardTitle tag="h3">Signup</CardTitle>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert color="danger" isOpen={showAlert} toggle={onDismiss}>
            Something went wrong with your registration!
          </Alert>

          <FormGroup>
            <Label htmlFor='username'>Username</Label>
            <Input
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <FormFeedback className="invalid-feedback">Username is required!</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              placeholder='Your email address'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <FormFeedback className="invalid-feedback">Email is required!</FormFeedback>
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
            <FormFeedback className="invalid-feedback">Password is required!</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='battletag'>*Battle Tag</Label>
            <Input
              type='battletag'
              placeholder='Your Battle Tag'
              name='battletag'
              onChange={handleInputChange}
              value={userFormData.battletag}
            />
            <FormFeedback className="invalid-feedback">Password is required!</FormFeedback>
          </FormGroup>
          <span>*Your Battle Tag is not required for signup*</span>
          <br />

          <Button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            color='secondary'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}