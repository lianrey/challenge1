import React from 'react'
import { render } from 'react-dom';
import View from './ListBugs.js';

const data = document.__INITIALSTATE__;
render(<View bugs={data} />, document.getElementById("root"))