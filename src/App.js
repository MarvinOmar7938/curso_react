import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const App=() => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" 
              src="https://wallpapercave.com/wp/wp3102477.jpg" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDteam</p>
          <p> Tu futuro te esta esperando</p>
          <a href="https://ed.team" className="button">Suscribirse</a>
        </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
  <Curso
        title="react desde cero con EDteam"
        image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png"
        price="20 USD"
        profesor="Marvin Tola"
        />

      <Curso
        title="Java desde cero"
        image="https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/java-datos.jpg"
        price="80 USD"
        profesor="Omar Pacheco"
        />
</div>
  </>
)

export default App;