import React from 'react';
// var React = require('react')
import Enzyme, { shallow } from 'enzyme';
// import * as Enzyme from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16';
// import MainInfo from '../public/src/components/MainInfo.jsx'

// var React = require('react');
// var Enzyme = require('enzyme');
// var shallow = Enzyme.shallow;
// var Adapter = require('enzyme-adapter-react-16');
// var MainInfo = require('../public/test/components/MainInfo.js');



Enzyme.configure({adapter: new Adapter()});


// console.log(mainInfo);

test('Example Test', () => {
  let result = 2 * 3;
  expect(result).toBe(6);
  result = true;
  expect(result).toBe(true);
});