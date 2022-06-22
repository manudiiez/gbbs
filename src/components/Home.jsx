
import { Link } from 'react-router-dom'

import '../styles/styles.scss'
import Etec from '../img/etec.png'
import Um from '../img/um.png'
import Luimum from '../img/Sin título-3.jpg'
import team from '../img/team.png'
import LogoB from '../img/gbbsBlanco.png'
import Favier from '../img/jorgeFavier.jpg'
import Repi from '../img/logo-REPI.png'

const Home = () => {
    return (  
        <div id="home">
            <section id='inicio' className="header d-flex justify-content-center align-items-center">
                <div className="container-lg">
                    <div className="row flex-row justify-content-center align-items-center">
                        <div className='col-3 headerLogo d-flex justify-content-center align-items-center'>
                            <img src={LogoB} alt="" />
                        </div>
                        <div className='headerBody col-6 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='h1 text-center text-light'>ETec GBBS</h2>
                            <Link to='/foros' className="btn btn-outline-light">Explorar Foros</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id='nosotros'>
                <div className="container-lg">
                    <h3 className='text-center text-light pt-5'>Sobre nosotros</h3>
                    <div className="row py-5 justify-content-center align-items-center">
                        <div className="col-lg-6 col-12">
                            <h1 className='text-light text-start h5 fw-lighter lh-lg'>El producto es un GBBS (Global Bulletin Board System), que es una especie de foro que permite la creación de usuarios, que pueden ingresar y compartir información entre ellos. Los usuarios pueden crear y participar en foros, y formar parte de la comunidad de radioaficionados a través del GBBS.</h1>
                            <h2 className='text-light text-start h5 fw-lighter lh-lg'>
                                Nuestro equipo esta formado por todo 6° infromatica del colegio tecnico de la universidad de Mendoza, ETec.
                            </h2>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img className='w-100 rounded shadow-lg' src={team} alt="" />
                        </div>
                    </div>
                    <div className="row directorContainer justify-content-center align-items-center">
                        <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                            <img className='imgDirector rounded-pill shadow-lg' src={Favier} alt="" />
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className='text-light text-start h5 fw-normal'>JORGE FAVIER</p>
                            <h2 className='text-light text-start h5 fw-lighter lh-lg'>
                                Doctor en Ingeniería. Director de la Estación Packet Radio y del Global Bulletin Board System
                            </h2>
                        </div>
                    </div>
                    <div className="row pt-3 pb-5 ">
                        <div className="col-12">
                            <h4 className='text-light text-start my-5'>Nuestra Misión</h4>
                            <p className='text-light text-center'>Ofrecer una mejor experiencia y servicio del GBBS para tratar de satisfacer a usuarios de menor edad (acostumbrados a nuevas tecnologías) y clientes de mayor edad que sean amantes de los antiguos sistemas BBS. </p>
                        </div>
                        <div className="col-12">
                            <h4 className='text-light text-end my-5'>Nuestra Visión</h4>
                            <p className='text-light text-center'>Ser líder en las plataformas web para radioaficionados, para poder generar valores económicos y sociales gestionando modelos de negocio innovadores.</p>
                        </div>
                        <div className="col-12">
                            <h4 className='text-light text-start py-5'>Nuestros Valores</h4>
                            <p className='text-light text-center'>Nuestros valores nos guían cada día para crecer más como personas y también como empresa empatizando con nuestros clientes expresando quienes somos y que creemos. Algunos de nuestros valores son: empatía, progreso, innovación, contribución y fiabilidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='organizaciones'>

                <div className="container-lg py-5">
                    <div className="row justify-content-center align-items-center">
                        <h5 className='text-center py-3 organizacionesText'>Organizaciones relacionadas</h5>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                                <img src={Um} alt="" />
                                <h6>Universidad de Mendoza</h6>
                            </div>
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                                <img src={Etec} alt="" />
                                <h6>Colegio tecnico ETec</h6>
                            </div>
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                                <img src={Luimum} alt="" />
                                <h6>LU1MUM</h6>
                            </div>
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                                <img src={Repi} alt="" />
                                <h6>Repi</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Home;