import { StrictMode } from 'react';
import { render } from 'react-dom';
import ScrollToTop from '../utils/ScrollToTop';
import App from '../generators/P3/Persona3';

render(
  <StrictMode>
      <ScrollToTop />
      <App />
  </StrictMode>,
    document.getElementById('root')
);
