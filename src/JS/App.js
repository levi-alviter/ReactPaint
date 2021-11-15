import '../CSS/App.css';
import React,{Fragment,useState,useRef} from 'react';
import Header from './Header.js';
import StatusScreen from './StatusScreen.js';
import GridContainer from './GridContainer.js';
import ButtonContainer from './Shapes.js';

const IDLE_STATUS = 'idle';
const LOADING_STATUS = 'loading';
const COMPLETE_STATUS = 'complete';
const ERROR_STATUS = 'error';

function App() {
  const [status,setStatus] = useState(IDLE_STATUS);
  const grid = [];
  //Se llena un grid con todos los pixeles
  for(let i = 0; i<100;i++){
    grid.push({id:i+1,
      color:"#FFF"});
  }
  // Se crea un useState para el color con el uso de lifting state
  const [selectedColor,setSelectedColor] = useState('#FFF');
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
      drawing={drawing}
      status={status}
      setStatus={setStatus}
      IDLE_STATUS={IDLE_STATUS}
      LOADING_STATUS={LOADING_STATUS}
      COMPLETE_STATUS={COMPLETE_STATUS}
      ERROR_STATUS={ERROR_STATUS}/>
      <main className="main">
        <GridContainer selectedColor={selectedColor} 
        gridDraw={gridDraw} 
        setGridDraw={setGridDraw}
        picture={picture}
        drawing={drawing}
        IDLE_STATUS={IDLE_STATUS}
        LOADING_STATUS={LOADING_STATUS}
        COMPLETE_STATUS={COMPLETE_STATUS}
        ERROR_STATUS={ERROR_STATUS}
        />
      </main>
      <footer className="footer">
        <ButtonContainer setGridDraw={setGridDraw}/>
      </footer>
      <StatusScreen
        status={status}
        LOADING_STATUS={LOADING_STATUS}
        COMPLETE_STATUS={COMPLETE_STATUS}
        ERROR_STATUS={ERROR_STATUS}/>
    </Fragment>
  );
}

export default App;