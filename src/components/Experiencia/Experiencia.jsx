import experienciaData from '../../Data/experiencia.json'; // Importa los datos del archivo JSON
import './Experiencia.css';

function Experiencia() {
  return (
    <div id='experiencia' className="container">
      <h1>Experiencia</h1>
      <ul className="timeline">
        {experienciaData.map((exp, index) => (
          <li key={index}>
            <div className="timeline-badge"><i className="fas fa-briefcase"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 id='organizacion' className="timeline-title">{exp.organizacion}</h4>
                <h5 id='cargo' className="timeline-title">{exp.cargo}</h5>
                <p id='fechas'><i className="fas fa-clock"></i> {exp.fechas}</p>
              </div>
              <div className="timeline-body">
                <p id='funciones'>
                  {exp.funciones.map((funcion, idx) => (
                    <span key={idx}>{funcion}<br /></span>
                  ))}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experiencia;


