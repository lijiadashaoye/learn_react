import React from 'react';
import './one.css';

// 在 webpack.config.js 文件中定义好了路径别名： alias 属性下
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
        this.setState(() => this.fff = '改变了的数据 234234')
    }

    render() {
        return (<div className="one">

            <img alt='' style={{ width: '100px' }} src={require('Imgs/1.png')}></img><br />
            <span style={{ color: 'blue', 'font-weight': 'bold' }}>{this.fff}</span>&nbsp;&nbsp;
            <button onClick={this.clickFn}>绑定事件，改变数据</button>
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
