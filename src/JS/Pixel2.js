import React from 'react';
import '../CSS/Pixel2.css';

function Pixel2(props){
    let color = props.draw[props.k];
    return(
        <div
        className="pixel2"
        style={{
            backgroundColor: color,
        }} 
        // onMouseDown={dragChangeColor}
        ></div>
    );
}

export default Pixel2;