import React from 'react';
import "./styles/styles.scss"

const App=() => (
  <>
    <div className="saludo">
      <h1>Hola mundo</h1>
    <p  >hola, saludando desde mi componente</p>
    </div>
    <div>
      <img src="https://cdn-www.bluestacks.com/bs-images/Saint-Seiya-Awakening_Summoning-Best-Characters_ES_2.jpg"/>
    </div>
  </>
)

export default App;

//reglas JSX
//1: toda etiqueta debe cerrarse
//2: Los componentes deben devolver un solo elemento padre
//3: Apoyarse de los fragments cuando necesito devolver 2 elementos
//4: Fragment => <>hijos</>
//5: img siempre se cierra
//6: class =>className
//7: for => htmlFor