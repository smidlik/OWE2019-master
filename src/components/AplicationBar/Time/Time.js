import React from 'react';

const style = {
    width: '25%',
    textAlign: 'left',
    borderRight:'1px solid black'
}


class Time extends React.Component {

    state = {
        curTime: null
    };
    componentWillMount(){
        setInterval(function(){
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }
    render() {
        this.componentWillMount()
        return (
            <div style={style}>
                <span>{this.state.curTime}</span>
            </div>
        )
    };
}
export default Time;