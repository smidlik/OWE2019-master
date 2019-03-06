import React from 'react';


const style = {
    width: '100%',
    textAlign: 'center',
    fontSize: '2em'
};





//ES6 arrow funkce
const AppName = ({name}) => {
    return(
        <div style={style}>
            <span>{name}</span>
        </div>
    )
};



/*

//ES5 funkce
function takhleToJedeTaky() {
    return(
        <div>
            Je to skoro stejne
        </div>
    )
};

//Muze byt
const AppNecoDalsih= () =>(
    <div>Obsah</div>
);

*/

export default AppName;