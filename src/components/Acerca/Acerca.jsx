import './Acerca.css'; // Importa el archivo CSS aquí

const Acerca = () => {
    return (
        <section id="acerca" className="section about-section gray-bg">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">Acerca de mi</h3>
                            <p className='texto'>
                                Soy ingeniera de sistemas con formación en programación y desarrollo web full
                                stack, me apasiona todo lo relacionado con tecnologías de desarrollo de software
                                y siempre estoy en búsqueda de nuevas formas de aprender, crecer y asumir nuevos
                                retos. Me caracterizo por la recursividad, iniciativa, proactividad,
                                organización y buen ritmo de aprendizaje, lo cual me facilita la adaptación a
                                las diferentes labores que emprendo y a abordar nuevas herramientas tecnológicas
                                e informáticas.
                            </p>
                        </div>
                        <h5>Descargar CV:    
                        <a className="btn btn-primary btn-floating m-4" style={{ backgroundColor: "#2A8F7F", fontSize: '24px' }} href="/Cv-LaudyNavarrete.pdf" download><i className="fas fa-file-pdf"></i></a>
                        </h5>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src="https://avatars.githubusercontent.com/u/44625627?v=4" title="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Acerca;
