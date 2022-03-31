import React from "react";

const Servicos = props => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" >

                <div className="section-title">
                    <h2>Serviços</h2>
                    <p>Texto dos serviços.</p>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch "  data-aos-delay="100">
                        <div className="icon-box">
                            <h4><a href=""><br/>Serviços Teste</a></h4>
                            <p>Descrição..teste..teste teste..teste ..</p><br/>
                            <a href="#" className="btn-learn-more">Saiba mais</a>
                        </div>
                        
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"  data-aos-delay="200">
                        <div className="icon-box">
                            <h4><a href=""><br/>Serviços Teste</a></h4>
                            <p>Descrição..teste..teste teste..teste ..</p> <br/>
                            <a href="#" className="btn-learn-more">Saiba mais</a>               
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"  data-aos-delay="300">
                        <div className="icon-box">
                            <h4><a href=""><br/>Serviços Teste</a></h4>
                            <p>Descrição..teste..teste teste..teste ..</p><br/>
                            <a href="#" className="btn-learn-more">Saiba mais</a>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"  data-aos-delay="400">
                        <div className="icon-box">
                            <h4><a href=""><br/>Serviços Teste</a></h4>
                            <p>Descrição..teste..teste teste..teste ..</p><br/>
                            <a href="#" className="btn-learn-more">Saiba mais</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Servicos