import React from "react";



const Banner = props => {
    return (
        
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"  data-aos-delay="200">
              <h1>Frase de impacto......teste teste</h1>
              <h2>Segunda frase de impacto.... teste2 teste2</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">Cadastre-se</a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Veja como é facil</span></a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img"  data-aos-delay="200">
              <img src="assets/img/inicial.png" className="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
    
      </section>
    )
}
export default Banner