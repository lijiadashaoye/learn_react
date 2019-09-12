import React from 'react';
import './one.css';

// 在 webpack.config.js 文件中定义好了路径别名： alias 属性下
import Two from 'Src/components/two/two';
import Three from 'Src/components/three/three';

export default class One extends React.Component {
    notin_state = '不在state里'

    constructor(props) {
        super(props);
        this.props_data = props.obj.name;
        this.state = {
            fff: 'style 写入样式时，要使用驼峰式',
            props_data: '',
            input_data: '',
        }
    }
    clickFn = (event) => {
        console.log(event.screenX)
        console.log(this)
        console.log(this.props)
        console.log(this.state.fff)
        // 改变数据的方法 1
        this.setState({
            fff: '改变了的数据'
        })
    }

    use_state = () => {
        // 改变数据的方法 2
        this.setState(() => this.notin_state = '改变数据的方法')
    }
    changeFn = () => {
        this.setState(() => this.props.obj.input = '改变了传入数据')
    }
    show_input = (e) => {
        let kk = e.target.value;
        this.setState(() => this.state.input_data = kk)
    }

    render() {
        return (<div className="one">

            <img alt='' style={{ width: '100px' }} src={require('Imgs/1.png')}></img><br />

            <span style={{ color: 'blue', 'fontWeight': 'bold' }}>{this.state.fff}</span>&nbsp;&nbsp;
            <button onClick={this.clickFn}>绑定事件，改变组件自己的数据 1</button><br />

            <span style={{ color: 'red', 'fontWeight': 'bold' }}>{this.notin_state}</span>&nbsp;&nbsp;
            <button onClick={this.use_state}>绑定事件，改变组件自己的数据 2</button>
            
            <p className='classd'>使用class样式 </p>
            <p >获取输入属性： {this.props_data}</p>
            <button onClick={this.changeFn}>改变传入数据</button>
            <p style={{ color: 'red' }}>使用class样式</p>
            <label htmlFor="labeld">label写法：</label>
            <input id="labeld" onChange={this.show_input}></input>&nbsp;<span>{this.state.input_data}</span>
            <Two />
            <Three />
        </div>
        )
    };

}
