import { StrictMode } from 'react';
import { render } from 'react-dom';
import ScrollToTop from '../utils/ScrollToTop';
import App from '../generators/P4/Persona4';

render(
  <StrictMode>
      <ScrollToTop />
      <App />
  </StrictMode>,
    document.getElementById('root')
);
