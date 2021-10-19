import React from 'react';
import '../CSS/Pixel.css';

function Pixel(props){
    function clickChangeColor(e){
        e.target.style.backgroundColor = props.selectedColor;
        let pixelUpdate = {};
        pixelUpdate[`${props.k}`] = props.selectedColor;
        props.setDraw({
            ...props.draw,
            ...pixelUpdate});
    }

    function dragChangeColor(e){
        e.target.style.backgroundColor = props.selectedColor;
        let pixelUpdate = {};
        pixelUpdate[`${props.k}`] = props.selectedColor;
        props.setDraw({
            ...props.draw,
            ...pixelUpdate});
    }
    
    return(
        <div 
        className="pixel" 
        onClick={clickChangeColor} 
        onMouseOver={dragChangeColor}
        // onMouseDown={dragChangeColor}
        ></div>
    );
}

export default Pixel;