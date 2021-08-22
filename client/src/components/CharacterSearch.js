import { Container, Col, Form, Button, Row, Input } from 'reactstrap';
import { useState, } from 'react';
import { getProfile, getToken } from '../utils/API';
import { useAppContext } from '../utils/AppContext';

const CharacterSearch = () => {
  const appCtx = useAppContext();
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // create state for holding returned google api data
    // create state for holding our search field data


    if (!searchInput) {
      return false;
    }

    try {

      const token = await getToken();
      const response = await getProfile(searchInput, token);
      console.log(response)

      //battleTag, paragonLevel, guildName     

      appCtx.setAppState({ ...appCtx.appState, battleTag: response.battleTag, heroes: response.heroes });
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