import React from 'react';
import './one.css';

import Two from 'Src/components/two/two';
import Three from 'Src/components/three/three';

export default class One extends React.Component {
    fff = '组件变量';
    constructor(props) {
        super(props);
        console.log(props)
    }
    clickFn = (event) => {
        console.log(event.target)
        console.log(this)
        console.log(this.fff)

    }

    render() {
        return (<div className="one">
            {this.fff}
            {/* 在 webpack.config.js 文件中定义好了路径别名： alias 属性下 */}
            <img alt='' style={{ width: '100px' }} src={require('Imgs/1.png')}></img>
            <button onClick={this.clickFn}>clickFn</button>
            <p className='classd'>使用class样式</p>
            <p style={{ color: 'red' }}>使用class样式</p>
            <label htmlFor="labeld">label写法：</label>
            <input id="labeld"></input>
            <Two />
            <Three />
        </div>
        )
    };

}
