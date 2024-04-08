import './Footer.css'; 

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mx-3">
            <ul className="adress">
              <span>Contacto</span>
              <li><p className='p_adress'>Madrid, 28038</p></li>
              <li><p className='p_adress'>+34 611689430</p></li>
              <li><p className='p_adress'>laudyeneth@gmail.com</p></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mx-3">
            <div className="search-text">
              <div className="container">
                <div className="row text-center">
                  <div className="form">
                    <span className="header-form">Escribeme</span>
                    <form id="search-form" className="form-search form-horizontal" action="mailto:tucorreo@example.com" method="post" encType="text/plain">
                      <input type="text" className="input-search" placeholder="Email" name="email" />
                      <button type="submit" className="btn-search"><span style={{ fontSize: '15px' }}>Enviar</span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mx-3">
            <ul className="social">
              <span>Social</span>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!"><i className="fab fa-google"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="https://linkedin.com/in/laudyeneth"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="https://github.com/laudyeneth"><i className="fab fa-github"></i></a>
              <div>
              <a className="btn btn-primary btn-floating m-4" style={{ backgroundColor: "#2A8F7F", fontSize: '24px' }} href="/Cv-LaudyNavarrete.pdf" download><i className="fas fa-file-pdf"></i></a>
              </div>
              
            </ul>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;