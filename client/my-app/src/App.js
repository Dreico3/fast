import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  var [nombre,setNombre]=React.useState("")
  const setState =(e)=>{
      setNombre(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav  setState={setState}
              nombre={nombre}/>
      </header>
      <main>
        <button type="button" className='boton'>apretame</button>
        <div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
