import React from 'react'

const mayorEdad = edad => edad>18

const persona = {"nombre":"Marvin" , "apellido":"Tola","edad":35}

const Curso=() => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png" alt="poster del curso" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        {
           mayorEdad(persona.edad) ? <h3>Soy mayor</h3>:<p>soy menor</p>
        }
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg" alt="tio tola" />
            </div>
          </div>
          <span className="small">{`${persona.nombre} ${persona.apellido}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
      </div>
    </div>
  </article>
)

export default Curso