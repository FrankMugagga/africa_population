import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Continents from '../features/countries/continents';
import store from '../redux/store';

describe('performing test for continents', () => {
  it('testing if continents page really matches', () => {
    const continentRender = renderer
      .create(
        <Provider store={store}>
          <Continents />
        </Provider>,
      )
      .toJSON();
    expect(continentRender).toMatchSnapshot();
  });
  test('That jest works', () => {
    expect(true).toBe(true);
  });
});
