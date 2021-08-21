import { Container, Col, Form, Button, Row, Input } from 'reactstrap';
import React, { useState, } from 'react';
import { getProfile, getToken } from '../utils/API';






const CharacterSearch = () => {
  // create state for holding returned google api data
  // const [searchedCharacter, setsearchedCharacter] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {

      const token = await getToken();
      const response = await getProfile(searchInput, token);
      console.log(response)

      const data = response.heroes.map((hero) => (hero.id));

      // setsearchedCharacter(data);
      console.log(data)
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <Container>
      <h1>Search for Battle Tag #</h1>
      <Form onSubmit={handleFormSubmit}>
        <Row form>
          <Col xs={12} md={8}>
            <Input
              name='searchInput'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type='text'
              size='lg'
              placeholder='Search for a Battle Tag #'
            />
          </Col>
          <Col xs={12} md={4}>
            <Button type='submit' variant='success' size='lg'>
              Submit Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CharacterSearch;