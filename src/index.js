// We need the entire React package
import React from 'react';
// We only need one of the methods from react-dom
// in this case, it is render
import { render } from 'react-dom';
// Loading in Router
import Router from './components/Router';
// Loading in CSS
import './css/style.css'

render(<Router />, document.querySelector('#main'));
