import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('Card component', () => {
  it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
