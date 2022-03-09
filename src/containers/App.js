import React from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ErrorDialog from './ErrorDialog.js';
import './App.css';
import UserAgreementDialog from './UserAgreementDialog.js';
import { Button } from 'react-bootstrap';
import { showError } from '../actions/index.js';

const App = props => {
  const dispatch = useDispatch();
  const throwError = () => {
    try {
      undefined();
    } catch (err) {
      console.log(err);
      dispatch(showError(err.toString()));
    }
  }
  return (
    <Container>
      <Row>
        This is just a template
      </Row>
      <br/>
      <Button onClick={throwError}>Throw an Error</Button>
      <ErrorDialog />
      <UserAgreementDialog />
    </Container>
  );
}

App.propTypes = {
  content: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => ({
  content: 'foobar',
})

export default connect(mapStateToProps)(App);
