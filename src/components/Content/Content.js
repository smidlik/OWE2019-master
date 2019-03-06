import React from 'react'

const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '50px',
    alignItems: 'center',
    backgroundColor: 'yellow'
};
class Content extends React.Component{

    state = {
        counter: 0
    };

    handelClick = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return(
            <div style={style}>
                <button onClick={this.handelClick}>Touch HERE</button>
                <h1>{this.state.counter}</h1>
            </div>

        );
    }

}

export default Content;