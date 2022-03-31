import React from "react";

const Planos = props => {
    return (
        <section id="Planos" className="Planos section-bg">
            <div className="container" >

                <div className="section-title">
                    <h2>Planos</h2>
                    <p>Texto dos serviços.</p>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch " data-aos-delay="100">
                        <div className="icon-box">
                            <h2>Plano Diamante</h2><br/>
                            <h4><sup>R$</sup>0<span>por mês</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> item 1 do plano </li>
                                <li><i class="bx bx-check"></i> item 2 do plano</li>
                                <li><i class="bx bx-check"></i> item 3 do plano</li>
                                <li class="na"><i class="bx bx-x"></i> <span>item 4 do plano sem acesso</span></li>
                                <li class="na"><i class="bx bx-x"></i> <span>item 5 do plano sem acesso</span></li>
                            </ul>
                            <div className="BotaoAssinar">
                                <a href="#" className="btn-learn-more">Assinar</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos-delay="200">
                        <div className="icon-box">
                            <h2>Plano Ouro</h2><br/>
                            <h4><sup>R$</sup>29<span> por mês</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> item 1 do plano</li>
                                <li><i class="bx bx-check"></i> item 2 do plano</li>
                                <li><i class="bx bx-check"></i> item 3 do plano</li>
                                <li><i class="bx bx-check"></i> item 4 do plano</li>
                                <li><i class="bx bx-check"></i> item 5 do plano</li>
                            </ul>
                            <div className="BotaoAssinar">
                                <a href="#" className="btn-learn-more">Assinar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos-delay="300">
                        <div className="icon-box">
                            <h2>Plano Prata </h2><br/>
                            <h4><sup>R$</sup>49<span> por mês</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> item 1 do plano</li>
                                <li><i class="bx bx-check"></i> item 2 do plano</li>
                                <li><i class="bx bx-check"></i> item 3 do plano</li>
                                <li><i class="bx bx-check"></i> item 4 do plano</li>
                                <li><i class="bx bx-check"></i> item 5 do plano</li>
                            </ul>
                            <div className="BotaoAssinar">
                                <a href="#" className="btn-learn-more">Assinar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos-delay="400">
                        <div className="icon-box">
                            <h2>Plano Bronze </h2><br/>
                            <h4><sup>R$</sup>49<span> por mês</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> item 1 do plano</li>
                                <li><i class="bx bx-check"></i> item 2 do plano</li>
                                <li><i class="bx bx-check"></i> item 3 do plano</li>
                                <li><i class="bx bx-check"></i> item 4 do plano</li>
                                <li><i class="bx bx-check"></i> item 5 do plano</li>
                            </ul>
                            <div className="BotaoAssinar">
                                <a href="#" className="btn-learn-more">Assinar</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Planos 