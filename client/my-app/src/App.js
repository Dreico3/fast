import React from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  var [nombre, setNombre] = React.useState("")
  var [palin, setPalin] = React.useState([])
  const setState = (e) => {
    if (e === "") {
      setNombre("");
    } else {
      setNombre(e.target.value);
    }
  }
  const retornar = (nom) => {
    fetch(`https://palindrome-appy.herokuapp.com/iecho?text=${nom}`)
      .then(res => {
        res.json()
          .then(res => {
            setPalin([...palin, res])
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav setState={setState}
          nombre={nombre}
          retornar={retornar} />
      </header>
      <main>
        <h2>Results</h2>
        <div className='contenedor'>
          <ol>
            {palin.map((r, i) =>{
             return r.palindromo?<li className='noapro' key={i}>{r.text}</li>:<li className='apro' key={i}>{r.text}</li>
            })}
          </ol>
        </div>
      </main>
    </div>
  );
}

export default App;
