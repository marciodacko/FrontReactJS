import React from "react";

const Cabecalho = props => {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="index.html">Logo</a></h1>

                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#services">Serviços</a></li>
                        <li><a className="nav-link scrollto" href="#prices">Planos</a></li>
                        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Equipe</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contato</a></li>
                        <li><a className="getstarted scrollto" href="#about">Login</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>

    )
}
export default Cabecalho