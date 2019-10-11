import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos =[
  {
    "title":"React desde cero",
    "image":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png",
    "price":40,
    "profesor":"Tola Pacheco"
  },
  {
    "title":"drupal desde cero",
    "image":"https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Kotlin.png?itok=q7Du9KgK",
    "price":30,
    "profesor":"Marvin Tola"
  },
  {
    "title":"Go desde cero",
    "image":"https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/java%20desde%20cero.jpg",
    "price":50,
    "profesor":"Omar tola"
  },
  {
    "title":"HTML desde cero",
    "image":"https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/Node.jpg?itok=SurL1AZa",
    "price":10,
    "profesor":"Marvin Pacheco"
  }
]

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
  {
    cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
  }
</div>
  </>
)

export default App;