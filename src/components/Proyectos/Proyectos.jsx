import proyectosData from '../../Data/proyectos.json'; // Importa los datos del archivo JSON
import { getImageUrl } from "../../../utils";

const Proyectos = () => {
  return (
    <section id="gallery">
      <div id="proyectos" className="container">
        <h1>Proyectos</h1>
        <div className="row">
          {proyectosData.map((proyecto, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card">
                <img src={getImageUrl(proyecto.img)} alt={proyecto.img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{proyecto.title}</h5>
                  <p className="card-text">{proyecto.description}</p>
                  <p className="card-text"><strong>Skills:</strong> {proyecto.skills}</p>
                  <div className="text-center">
                    <a href={proyecto.demo} className="btn btn-secondary btn-sm m-1"> Demo </a>
                    <a href={proyecto.source} className="btn btn btn-info btn-sm m-1"> Git Hub </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
