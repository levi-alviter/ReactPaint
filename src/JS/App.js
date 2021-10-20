import '../CSS/App.css';
import React,{Fragment,useState} from 'react';
import Header from './Header.js';
import FirstGrid from './FirstGrid.js';
import SecondGrid from './SecondGrid.js';
import ButtonContainer from './Shapes.js';
function App() {
  const grid = [];
  for(let i = 0; i<100;i++){
    grid.push({id:i+1,
      color:"#FFF"});
  }
  const [selectedColor,setSelectedColor] = useState();
  const [gridDraw,setGridDraw] = useState(grid);

  return (
    <Fragment>
      <Header selectedColor={selectedColor} setSelectedColor={setSelectedColor} setGridDraw={setGridDraw}/>
      <main className="main">
        <FirstGrid gridDraw={gridDraw}/>
        <SecondGrid selectedColor={selectedColor} gridDraw={gridDraw} setGridDraw={setGridDraw}/>
      </main>
      <footer className="footer">
        <ButtonContainer setGridDraw={setGridDraw}/>
      </footer>
    </Fragment>
  );
}

export default App;