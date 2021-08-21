
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import React, { useState, } from 'react';
import Auth from "../utils/auth"
import { getProfile } from '../utils/API';






const CharacterSearch = () => {
        // create state for holding returned google api data
        const [searchedCharacter, setsearchedCharacter] = useState([]);
        // create state for holding our search field data
        const [searchInput, setSearchInput] = useState('');

        // create method to search for books and set state on form submit
        const handleFormSubmit = async (event) => {
          event.preventDefault();
      
          if (!searchInput) {
            return false;
          }
      
          try {
            const response = await getProfile(searchInput);
      
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
      
            const { items } = await response.json();

            //
      
            const data = items.map((book) => ({
              bookId: book.id,
              authors: book.volumeInfo.authors || ['No author to display'],
              title: book.volumeInfo.title,
              description: book.volumeInfo.description,
            }));
      
            setsearchedCharacter(data);
            console.log(data)
            setSearchInput('');
          } catch (err) {
            console.error(err);
          }
        };
          // get token
          const token = Auth.loggedIn() ? Auth.getToken() : null;



    return (
        
        <Container>
            <h1>Search for Battle Tag #</h1>
            <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
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
                    </Form.Row>
            </Form>
        </Container>
    );
}

export default CharacterSearch;