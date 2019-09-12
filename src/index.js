import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import One from './components/one/one';


ReactDOM.render(
    <One obj={{ name: 99 }} string='string_props' arrary={[1, 2, 3]} />,
    document.querySelector('#root')

);
serviceWorker.unregister();


