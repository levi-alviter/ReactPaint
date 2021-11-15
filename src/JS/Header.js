import '../CSS/Header.css';
import {useState} from 'react'
import html2canvas from 'html2canvas';
import axios from 'axios';
// const colorPallete = ['#040404','#FFFFFF',' #ccd4e3','#f36464','#f3ac54','#eccc4c','#6bd494','#34b3ab','#4ba2e5','#5277da','#b494f2','#eb64a3'];


function Header(props){
  const colorPallete = [];
  const [pallete,setPallete] = useState(colorPallete);

  let url = 'https://www.colr.org/json/colors/random/12';
  // Se hace petición a la URL
  axios.get(url).then(response =>{
    // Si el status es IDLE entonces se ejecuta el la asignación de colores a la paleta
    if(props.status === props.IDLE_STATUS){
      // Se pone el estatus en loading
      props.setStatus(props.LOADING_STATUS);
      // Se obtienen todos los colores del objeto que regresa la API y se guardan en otro en colorPallete agregando el símbolo de #
      response.data.colors.forEach((item)=>{
            if(item)
              colorPallete.push(`#${item.hex}`);
            else{
              // Esta línea es necesaria porque algunas veces la api regresa undefined en algunos colores. PD No me odies :c. 
              let numero = Math.random() * (999 - 0);
              colorPallete.push(numero);
            }
          });
      // Se asigna colorPallete a pallete
      setPallete(colorPallete);
      // Se asigna completado al estado
      props.setStatus(props.COMPLETE_STATUS);
    }
  }).catch(()=>{
    // Si ocurre un error, el estado tendrá ese valor
    props.setStatus(props.ERROR_STATUS);
  });
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
  // Si el estado está en complete se renderea toda la cabecera
  if(props.status === props.COMPLETE_STATUS){
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
            {pallete.map((color,index)=>{
            const isSelected = color === props.selectedColor;
            const borderStyle = isSelected ? '3px solid #5277da': 'none';
            return (
              <li key={`${color+index}`}
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
  // Si el estado es LOADING la cabecera mostrará un mensaje de loading
  else if(props.status === props.LOADING_STATUS){
    return <header className="header"><h1 className="header-warning">Please wait...</h1></header>
  }
  // En caso contrario la cabecera mostrará que hubo un error
  else{
    return <header className="header"><h1 className="header-warning">We are so sorry, there was an error! :[</h1></header>
  }
}

export default Header;