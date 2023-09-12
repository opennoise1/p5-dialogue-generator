import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import App from '../App';

render(
  <StrictMode>
    <BrowserRouter >
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
    document.getElementById('root')
);
