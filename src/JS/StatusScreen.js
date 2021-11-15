import '../CSS/StatusScreen.css';
import sad from '../ASSETS/Sad.svg';

function StatusScreen(props){
  // Si el state está en loading, se muestra el siguiente modal
  if(props.status === props.LOADING_STATUS){
    return(
      <div className="loading-container">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="loading-text">Loading...</h1>
      </div>
    );
  }
  // Si el state está en error, se muestra el siguiente modal
  if(props.status === props.ERROR_STATUS){
    return(
      <div className="error-container">
        <img className="error-image" src={sad} alt="Error!"/>
        <h1 className="error-text">There was an error while loading the page!</h1>
      </div>
    );
  }
  // Si el state no está en ninguno de los estados anteriores, entonces la app está corriendo correctamente y no se muestra nada que tapa al tablero
  else
    return '';
}

export default StatusScreen;