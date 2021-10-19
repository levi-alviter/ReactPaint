import '../CSS/Header.css';
const colorPallete = ['#040404','#FFFFFF',' #ccd4e3','#f36464','#f3ac54','#eccc4c','#6bd494','#34b3ab','#4ba2e5','#5277da','#b494f2','#eb64a3'];
function Header(props){
    function handleClick(e){
        props.setSelectedColor(e.target.name);
    }
    return (
        <header className="header">
           <div className="header__buttonCont">
               <button className="buttonCont__button">New game</button>
               <button className="buttonCont__button">Print</button>
           </div> 
           <div className="header__textCont">
                <h4 className="header__text">Choose a color to start painting:</h4>
           </div>
           <div className="header__colorbuttonCont">
               <ul className="colorList">
                   {colorPallete.map(color=>{
                    const isSelected = color === props.selectedColor;
                    const borderStyle = isSelected ? '3px solid #5277da': 'none';
                    return (
                        <li key={color}
                            className="colorItem">
                                <button  style={{
                                    backgroundColor: color,
                                    outline: borderStyle,
                                    }}    
                                    className="colorItem__button"     
                                    onClick={handleClick}
                                    name={color}/>
                        </li>
                    );    
                   })}
               </ul>
           </div>
        </header>
    );
}

export default Header;