import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import One from './components/one/one';

let data = {
    input: '3333',
    name: 99
}

ReactDOM.render(
    <div>
        {data.input}
        <One obj={data} string='string_props' arrary={[1, 2, 3]} />
    </div>,
    document.querySelector('#root')

);
serviceWorker.unregister();


