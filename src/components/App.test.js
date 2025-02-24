import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';

import App from './App';
import { rootReducer } from '../store';

const exampleApp = () => render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);

test('renders template', () => {
  const { getByText } = exampleApp();
  const template = getByText("This is just a template");
  expect(template).toBeInTheDocument();
});
