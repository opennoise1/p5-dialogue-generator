// import React, { StrictMode } from 'react';
// import { render } from 'react-dom';
// import App from '../App';

// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//     document.getElementById('root')
// );

import React, {StrictMode} from "../_snowpack/pkg/react.v17.0.1.js";
import {render} from "../_snowpack/pkg/react-dom.v17.0.1.js";
import App from "../App.js";
render(/* @__PURE__ */ React.createElement(StrictMode, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
