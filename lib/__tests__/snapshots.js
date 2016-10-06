import {Text} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SlideView from '../slideView.js';

it('renders correctly without props', () => {
  const tree = renderer.create(<SlideView/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with children', () => {
  const tree = renderer.create(<SlideView><Text>This is a slideview</Text></SlideView>).toJSON();
  expect(tree).toMatchSnapshot();
});
