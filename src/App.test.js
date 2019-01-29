import React from 'react';
import ReactDOM from 'react-dom';
import NormalizedDemo from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NormalizedDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
