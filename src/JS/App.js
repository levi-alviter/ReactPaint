import '../CSS/App.css';
import React,{Fragment,useState,useRef} from 'react';
import Header from './Header.js';
import GridContainer from './GridContainer.js';
import ButtonContainer from './Shapes.js';

function App() {
  const grid = [];
  //Se llena un grid con todos los pixeles
  for(let i = 0; i<100;i++){
    grid.push({id:i+1,
      color:"#FFF"});
  }
  // Se crea un useState para el color con el uso de lifting state
  const [selectedColor,setSelectedColor] = useState();
  // Se crea un useState para guardar toda la información del gird
  const [gridDraw,setGridDraw] = useState(grid);
  /*Se crean dos useRef para poder operar los dos gird del componente girdcontainer, desde diferentes componentes*/
  const picture = useRef();
  const drawing = useRef();

  // Los useRefs se pasan como props para que en los hijos tengan 
  // ref={props.picture} y ref={props.drawing}
  return (
    <Fragment>
      <Header 
      selectedColor={selectedColor} 
      setSelectedColor={setSelectedColor} 
      setGridDraw={setGridDraw}
      picture={picture}
      drawing={drawing}/>
      <main className="main">
        <GridContainer selectedColor={selectedColor} 
        gridDraw={gridDraw} 
        setGridDraw={setGridDraw}
        picture={picture}
        drawing={drawing}
        />
      </main>
      <footer className="footer">
        <ButtonContainer setGridDraw={setGridDraw}/>
      </footer>
    </Fragment>
  );
}

export default App;