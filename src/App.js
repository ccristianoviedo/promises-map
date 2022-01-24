import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Item';
import traerProductos, { PRODUCTOS } from './components/Itemlist';


function App() {
  const[productos, setProductos]=useState([]);
  const[cargando, setCargando]=useState(false);

  useEffect (()=> {
    setCargando(true)
    traerProductos()
    .then((data)=> setProductos(data))
    .catch((error)=> console.log(error))
    .finally(()=>setCargando(false))
    },[]);
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>VINOTECA OVIEDO</h1>
      </header>
      <nav className='itemProductos'>
        {cargando ? (
        <p>CARGANDO........</p>) :(
        PRODUCTOS.map((productos)=>
          <Items Key={productos.id} productos={productos} />
        ))}
      </nav>
            
    </div>
  );
}

export default App;
