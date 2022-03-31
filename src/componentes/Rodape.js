import React from "react";

const Rodape = props => {
    return (
        <div>
            <footer id="footer">
                <div class="footer-newsletter">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h4>Cadastre-se</h4>
                                <p>Tenha as melhores ofertas e serviços cadastre-se agora para ter acesso aos melhores planos</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Cadastre-se" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>Belecost</h3>
                                <p>
                                    Rua e numero 99 <br />
                                    Cidade, SC CEP<br />
                                    Brasil <br /><br />
                                    <strong>Telefone:</strong> +55 47 99999 9999<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Links Rapidos</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Sobre</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Serviços</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Outros Serviços</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Siga nossas redes sociais</h4>
                                <p>Acompanhe todas as novidades em nossas redes sociais </p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Marcio</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by Marcio Dacko
                    </div>
                </div>
            </footer >
        </div>
    )
}

export default Rodape