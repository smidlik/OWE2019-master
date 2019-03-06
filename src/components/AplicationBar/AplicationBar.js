import React from 'react';
import AppName from "./AppName";
import Time from "./Time";
import {appName} from "../../constants";

const style = {

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '80px',
    backgroundColor: '#9E9E9E',
    padding: '0px 20px'

};

class AplicationBar extends React.Component {


    render() {
        return (
            <div style={style}>
                <AppName name={appName}/>
                <Time/>
            </div>
        );
    }

}

export default AplicationBar;