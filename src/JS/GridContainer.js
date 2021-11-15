import '../CSS/GridContainer.css';
import starbackground from '../ASSETS/starbackground.png';
import React,{useState,Fragment} from 'react';
import html2canvas from 'html2canvas';

function GridContainer(props){
    // Variable que determnará si se ha hecho click 
    const [mouseIsDown,setMouseDown] = useState(false);
    function updateOnClick(e){
        setGrid(e);
    }

    /*La lógica del programa consiste en que si 
        se ha detectado que si se ha hecho click sobre el padre
        entonces la variable bandera se activa y permite que el 
        onMouseOver haga su trabajo, la variable se desactiva cuando
        se deja de dar click y el mouseOver deja de operar*/
    function mouseDownFlag(){setMouseDown(true);}

    function mouseUpFlag(){setMouseDown(false);}
    
    function updateOnDrag(e){
        if(mouseIsDown)
            setGrid(e);
    }

    function setGrid(e){
        props.setGridDraw(
            props.gridDraw.map(item=>{
                if(item.id === Number(e.target.id))
                    item.color = props.selectedColor;
                return item;
            }));
    }

    function takeScreen(e){
        props.drawing.current.style.gap='0';
        html2canvas(props.drawing.current).then(function(canvas) {    
            props.picture.current.replaceChild(canvas,props.picture.current.firstChild);
        });
        props.drawing.current.style.gap='1px';
    }
    // 
    return(
        <Fragment>
            <section className="FirstGrid" ref={props.picture}>
                <div className="Image__container">
                    <img className="Image__containerimage" src={starbackground} alt="Star"/>
                    <p><b>There's no image to download. Draw and print</b></p>
                    <button className="buttonCont__button" onClick={takeScreen}>Print</button>
                </div>
            </section>
            <div 
                className="secondGrid"
                onClick={updateOnClick}
                onMouseDown={mouseDownFlag}
                onMouseUp={mouseUpFlag}
                ref={props.drawing}>
                {props.gridDraw.map((item)=>{
                    return(
                        <button 
                        id={item.id} 
                        key={item.id}
                        className="Gridbutton"
                        style={{
                            backgroundColor: item.color,
                        }}
                        onMouseOver={updateOnDrag}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}

export default GridContainer;