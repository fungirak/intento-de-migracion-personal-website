import logoAgenda from '../../public/img/logoAgenda.jpeg'
import logoSocio from '../../public/img/logoSocio.jpeg'
import logoAtajos from '../../public/img/atajos.png'
import logoInvitados from '../../public/img/invitados.png'
import logoGithub from '../../public/img/logoGithub.svg';
import logoFlecha from '../../public/img/logoFlecha.png';
import logoSms from '../../public/img/logoSms.jpg';
import logoAerolineas from '../../public/img/logoAerolineas.jpg';
import logoFungirakWebsite from '../../public/img/logoFungirakWebsite.png';
import logoArgProg from '../../public/img/logoArgProg.png';
import Image from 'next/image';

import Comentarios from './Comentarios';
import Banda from './helpers/Banda';

const DescripcionPortafolio = () => {
    return (
        <>
    
        <div className="container">
            <h1 className="text-center fw-normal mt-3 p-2 shadow-lg rounded-pill">Portafolio</h1>
            <div className="row mt-5 d-flex justify-content-center col-12">

            <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h5 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">PROYECTO FINAL ARGENTINA PROGRAMA</h5>
                        <h6 className="text-center   text-dark  fw-normal mb-3">• FULLSTACK • JAVA & ANGULAR •</h6>
                            <Image width="10" height="10" src="/img/logoArgProg.png" alt="avion" className="app shadow-lg rounded efecto" />

                        <div className="text-center">
                                <a href="https://proyecto-arg-prog-frontend.web.app" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <Image width="10" height="10" src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <Image width="10" height="10" src="/img/logoGithub.svg" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  shadow rounded ">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h5 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">GESTIÓN DE INVITADOS</h5>
                        <h6 className="text-center  text-dark  fw-normal mb-3">• FULLSTACK • MERN •</h6>
                            <Image width="10" height="10" src="/img/invitados.png" alt="" className="app shadow-lg rounded efecto  " />

                        <div className="text-center">
                                <a href="https://fungirak.github.io/invitados-al-evento/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <Image width="10" height="10" src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak/invitados-al-evento" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark p-2 m-3">
                                        <Image width="10" height="10" src="/img/logoGithub.svg" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">CÓDIGO</span>
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>

            

            <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h5 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">SMS APP</h5>
                        <h6 className="text-center   text-dark  fw-normal mb-3">• FULL STACK • MERN •</h6>
                            <Image width="10" height="10" src="/img/logoSms.jpg" alt="" className="app shadow-lg rounded efecto " />

                        <div className="text-center">
                                <a href="https://www.fungirak.com/sms-app-react/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <Image width="10" height="10" src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak/sms-app-react" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <Image width="10" height="10" src="/img/logoGithub.svg" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  shadow rounded ">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h5 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">FUNGIRAK WEBSITE (This)</h5>
                        <h6 className="text-center  text-dark  fw-normal mb-3">• FULLSTACK • MERN •</h6>
                            <Image width="10" height="10" src="/img/logoFungirakWebsite.png" alt="" className="app shadow-lg rounded efecto  " />

                        <div className="text-center">
                               
                                    <span className="btn btn-sm  green accent-4  p-2 m-3 ">
                                        <Image width="10" height="10" src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold text-light">EN VIVO</span>
                                    </span>
                               

                                <a href="https://github.com/fungirak/new-fungirak-website-2022" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark p-2 m-3">
                                        <Image width="10" height="10" src="/img/logoGithub.svg" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">CÓDIGO</span>
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>



                <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h5 className="text-center  bg-dark p-1  rounded-pill text-white shadow fw-normal mb-2">PANEL DEL ESTUDIANTE</h5>
                        <h6 className="text-center  text-dark  fw-normal mb-3">• FRONTEND • HTML •</h6>
                        
                            <Image width="10" height="10" src="/img/atajos.png" alt="" className="app shadow-lg rounded  efecto" />
                        
                        <div className="text-center ">
                            <a href="https://fungirak.github.io/losAtajosDeFungi/" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-primary p-2 m-3 ">
                                    <Image width="10" height="10" src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">ABRIR</span>
                                </button>
                            </a>

                            <a href="https://github.com/fungirak/losAtajosDeFungi" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <Image width="10" height="10" src="/img/logoGithub.svg" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

              

                <div className="col-md-4  shadow rounded ">
                    <div className="col-sm-10 col-md-12 text-center card-body ">
                        <h5 className="text-center bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">HACETE SOCIO</h5>
                        <h6 className="text-center  text-dark fw-normal mb-3">• FRONTEND • REACT •</h6>
                      
                            <Image width="10" height="10" src="/img/logoSocio.jpeg" alt="" className="app shadow-lg rounded efecto  " />
              

                        <div className="text-center">
                            <a href="https://fungirak.github.io/Hacete-Socio-COLON-UNION-ReactJS/" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-primary p-2 m-3 ">
                                    <Image width="10" height="10" src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">ABRIR</span>
                                </button>
                            </a>

                            <a href="https://github.com/fungirak/Hacete-Socio-COLON-UNION-ReactJS" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <Image width="10" height="10" src="/img/logoGithub.svg" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

               
            </div>

            

            <Comentarios />
            
            <div className="espacio"></div>

            
            <Banda seccion={'PORTAFOLIO'} color={'deep-purple accent-4 text-white'} />

        </div>

        

    </>  
    )
}

export default DescripcionPortafolio
