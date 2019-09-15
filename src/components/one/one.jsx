import React from 'react';
import './one.css';

// 在 webpack.config.js 文件中定义好了路径别名： alias 属性下
import Two from 'Src/components/two/two';
import Three from 'Src/components/three/three';

export default class One extends React.Component {
    notin_state = '不在state里';
    city = ['北京', '上海', '广州']

    constructor(props) {
        super(props);
        this.state = {
            fff: 'style 写入样式时，要使用驼峰式',
            props_data: props.obj.name,
            input_data: '',
            city: ''
        }
    }
    clickFn = (event) => {
        console.log(event.screenX)
        console.log(this)
        console.log(this.props)
        console.log(this.state.fff)
        // 改变数据的方法 1 同步更新数据
        this.setState({
            fff: '改变了的数据'
        })
    }

    use_state = () => {
        // 改变数据的方法 2 异步更新数据
        this.setState(() => this.notin_state = '改变数据的方法')
    }
    changeFn = (e, id) => {
        // console.log(e);
        // console.log(id)

        this.props.obj.name = '改变了传入数据';
        this.setState({
            props_data: this.props.obj.name
        })
        console.log(this.props)
    }
    show_input = (e) => {
        // let kk = e.target.value;
        // this.setState(() => this.state.input_data = kk);  // 这样写会报警告
        this.setState({
            input_data: e.target.value
        });
    }
    set_city = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    componentWillMount() {  // 组件创建前--created
        console.log('componentWillMount')
    }
    componentDidMount() {  // 组件挂在上--mounted
        console.log('componentDidMount')
    }

    componentWillUnmount() { // 离开--destoryed
        console.log('componentWillUnmount')
    }

    render() {
        return (<div className="one">

            <img alt='' style={{ width: '100px' }} src={require('Imgs/1.png')}></img><br />

            <span style={{ color: 'blue', 'fontWeight': 'bold' }}>{this.state.fff}</span>&nbsp;&nbsp;
            <button onClick={this.clickFn}>绑定事件，改变组件自己的数据 1</button><br />

            <span style={{ color: 'red', 'fontWeight': 'bold' }}>{this.notin_state}</span>&nbsp;&nbsp;
            <button onClick={this.use_state}>绑定事件，改变组件自己的数据 2</button>

            <p className='classd'>使用class样式 </p>
            <p >获取输入属性： {this.state.props_data}</p>
            <button onClick={(e) => this.changeFn(e, 9)}>传参并改变传入数据</button>

            <p style={{ color: 'red' }}>使用class样式</p>
            <label htmlFor="labeld">label写法：</label>
            <input id="labeld" defaultValue="设置初始默认值" onChange={this.show_input}></input>&nbsp;
            <span>监听数据的变化：{this.state.input_data}</span>
            <div>
                <h3>表单</h3>
                <form>
                    <select value={this.state.city} onChange={this.set_city}>
                        {this.city.map((v, i) => <option key={i}>{v}</option>)}
                    </select>
                </form>
            </div>
            <Two />
            <Three />
        </div>
        )
    };

}
