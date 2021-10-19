import '../CSS/SecondGrid.css';
import React,{useState} from 'react';

function SecondGrid(props){
    const [mouseIsDown,setMouseDown] = useState(false);
   
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
    
    return(
      <div 
        className="secondGrid"
        onClick={updateOnClick}
        onMouseDown={mouseDownFlag}
        onMouseUp={mouseUpFlag}>
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
    );
}

export default SecondGrid;