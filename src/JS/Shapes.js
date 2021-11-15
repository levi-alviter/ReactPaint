import '../CSS/Shapes.css';
import React, {Fragment} from 'react';
import circle from '../ASSETS/circle.png';
import star from '../ASSETS/star.png';
import rayo from '../ASSETS/rayo.png';

function ButtonContainer(props){
    let morado = '#b494f2',amarillo = '#eccc4c',negro = '#000',rosa = '#eb64a3',azul = '#5277da',verde= '#6bd494';
    const circleArray = [];
    const rayoArray = [];
    const starArray = [];
    for(let i = 0; i<100;i++){
        if((i >= 13 && i<= 16) || i === 22 || i === 27 || i === 31 || i === 38 || i=== 41 || i === 48 || i === 51 || i === 58 || i===61 || i===68 || i === 72 || i === 77 || (i>=83 && i<=86)){
            circleArray.push({id:i+1,
              color:verde});
        }
        else
            circleArray.push({id:i+1,color:morado});
      }
    
    for(let i = 0; i<100;i++){
        if(i===6 || i === 15 || (i>=24 && i<=25) || (i>=33 && i<=34) || (i>=42 && i<=47) ||(i>=55 && i<=56) ||(i>=64 && i<=65) || i === 74 || i === 83 || i === 92){
            rayoArray.push({id:i+1,
                color:amarillo});
        }
        else
            rayoArray.push({id:i+1,color:negro});
    }
 

    for(let i = 0; i<100;i++){
        if(i===4 || i===11||i===14||i===17||i===22||i===23||i===25||i===26 || i===32 || i=== 36 || i=== 40 || i=== 41 || i===47 || i=== 48 || i=== 52 || i=== 56 || i=== 62 || i=== 63 || i=== 65 || i=== 66 || i=== 71 || i===74 || i=== 77 || i=== 84)
            starArray.push({id:i+1,color:rosa});
        else if(i===24 || (i>= 33 && i <= 35) || (i>= 42 && i <= 46) || (i>= 53 && i <= 55) || i === 64)
             starArray.push({id:i+1,color:amarillo});
        else
            starArray.push({id:i+1,color:azul});
    }
    function drawCircle(){
        props.setGridDraw(circleArray);
    }

    function drawStar(){
        props.setGridDraw(starArray);   
    }
    
    function drawRayo(){
        props.setGridDraw(rayoArray);   
    }

    return(
        <Fragment>
        <h2 className="footerTitle">Choose a predefined shape</h2>
        <div className="shapeContainer">
            <button className="shapeButton" onClick={drawCircle}>
                <img src={circle} alt="circle"/>
            </button>
            <button className="shapeButton" onClick={drawStar}>
                <img src={star} alt="star"/>
            </button>
            <button className="shapeButton" onClick={drawRayo}>
                <img src={rayo} alt="rayo"/>
            </button>
        </div>
        </Fragment>
    );
}

export default ButtonContainer;