import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import One from './components/one/one';

let data = {
    name: '初始化的传入数据'
}

ReactDOM.render(
    <div>
        <h2>在父组件中：{data.name}</h2>
        <One obj={data} string='string_props' arrary={[1, 2, 3]} />
    </div>,
    document.querySelector('#root')

);
serviceWorker.unregister();


