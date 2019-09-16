import React from 'react';
import './two.css';

class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'two_Component'
        }
    }

    // 输入数据发生变化时---ngOnChanges
    componentWillUpdate = () => {
        console.log('componentWillUpdate')
    }

    render() {
        return (<div className="two">
            <h2>two</h2>
            
        </div>)
    };

}

export default Two;

