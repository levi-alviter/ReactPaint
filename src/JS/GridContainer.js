import '../CSS/GridContainer.css';
import React,{useState,Fragment,useRef} from 'react';
import html2canvas from 'html2canvas';
function GridContainer(props){
    const [mouseIsDown,setMouseDown] = useState(false);
    const firstGrid = useRef();
    const secondGrid = useRef();

    function updateOnClick(e){
        setGrid(e);
    }

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
        secondGrid.current.style.gap='0';
        html2canvas(secondGrid.current).then(function(canvas) {    
                firstGrid.current.replaceChild(canvas,firstGrid.current.firstChild);
        });
        secondGrid.current.style.gap='1px';
    }
    
    return(
        <Fragment>
            <section className="FirstGrid" ref={firstGrid}>
                <div className="Image__container">
                    <p><b>There's no image to download. Draw and print</b></p>
                    <button className="buttonCont__button" onClick={takeScreen}>Print</button>
                </div>
            </section>
            <div 
                className="secondGrid"
                onClick={updateOnClick}
                onMouseDown={mouseDownFlag}
                onMouseUp={mouseUpFlag}
                ref={secondGrid}>
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
            <button onClick={takeScreen}>
                Click me
            </button>
        </Fragment>
    );
}

export default GridContainer;