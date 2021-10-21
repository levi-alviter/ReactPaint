import '../CSS/Header.css';
import html2canvas from 'html2canvas';
const colorPallete = ['#040404','#FFFFFF',' #ccd4e3','#f36464','#f3ac54','#eccc4c','#6bd494','#34b3ab','#4ba2e5','#5277da','#b494f2','#eb64a3'];

function Header(props){
    const grid = [];
    //Se declara un arreglo de objetos con todas las posiciones y colores de cada posición
    for(let i = 0; i<100;i++){
    grid.push({id:i+1,
      color:"#FFF"});
    }

    function handleClick(e){
        //Dar color a un recuadro
        props.setSelectedColor(e.target.name);
    }

    function newGame(e){
        //Pasar arreglo de objetos con color blanco en cada posición para resetear
        props.setGridDraw(grid);
    }

    
    function takeScreen(e){
        // Tengo acceso a los gird ya que las ref las puse en el padre, las conecte en un hijo y las llamo en otro hijo.
        // Antes de tomar la captura le digo al gird que quite su gap
        props.drawing.current.style.gap='0';
        // Método para hacer el screenshot, el primer parámetro es a lo que le vamos a sacar captura
        html2canvas(props.drawing.current).then(function(canvas) {
            // Aquí le decimos (a dónde voy a enviar captura).reemplaza
            // el primer hijo de mi gird de destino y ponle canvas que es 
            // a lo le sacamos captura
            props.picture.current.replaceChild(canvas,props.picture.current.firstChild);
        });
        // Después de la captura le digo que ponga su gap otra vez
        props.drawing.current.style.gap='1px';
    }

    return (
        <header className="header">
           <div className="header__buttonCont">
               <button className="buttonCont__button" onClick={newGame}>New game</button>
               <button className="buttonCont__button" onClick={takeScreen}>Print</button>
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
                                {/* Impresión del arreglo en elementos JSX para más información ver color picker*/}
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