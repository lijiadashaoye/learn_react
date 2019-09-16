import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import One from './components/one/one';
import Two from './components/two/two';
import Three from './components/three/three';

ReactDOM.render(
    <Router>
        <Link to='/one'>one</Link> <br />
        <Link to='/two'>two</Link> <br />
        <Link to='/three'>three</Link>
        <div>
            <Route path='/one' component={One} obj={{ name: '初始化的传入数据' }} string='string_props' arrary={[1, 2, 3]} />
            <Route path='/two' component={Two} />
            <Route path='/three' component={Three} />
        </div>
    </Router>,
    document.querySelector('#root')

);
serviceWorker.unregister();


