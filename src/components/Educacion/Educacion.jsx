import './Educacion.css'; 
import educacion from "../../Data/educacion.json";

function Educacion() {
    educacion.map((exp) => {
        //console.log("Elemento: " + JSON.stringify(exp))
        console.log(exp.cargo)
    })
    return (
        <div id='educacion' className="container">
          <h1 className="titulo">Educación</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline4">
                {educacion.map((item, index) => (
                  <div key={index} className="timeline">
                    <a className="timeline-content">
                      <span className="year">{item.anio}</span>
                      <div className="inner-content">
                        <h3 className="title">{item.titulacion}</h3>
                        <p className="description">{item.fechas}</p>
                        <p className="description">{item.institucion}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default Educacion;