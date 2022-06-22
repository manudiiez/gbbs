import '../styles/styles.scss'


import Etec from '../img/etec.png'
import Um from '../img/um.png'

const Footer = () => {
    return (  
        <footer id="footer">
            <div className="container-lg py-5">
                <div className="row footerContainer justify-content-center align-items-center">
                    <div className="col-lg-4 col-8 footerMap">
                        <iframe src="https://maps.google.com/maps?q=colegio%20tecnico%20de%20la%20univrsidad%20de%20mend&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <div className="col-lg-4 col-6 footerTitle py-3">
                        <h6 className='text-center text-light h4'>ETec GBBS</h6>
                    </div>
                    <div className="col-lg-4 col-6 footerLinks py-3">
                        <div className="row justify-content-center align-items-center">
                            <img className='col-6' src={Etec} alt="" />
                            <img className='col-6' src={Um} alt="" />
                        </div>
                    </div>

                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row pt-3 justify-content-center align-items-center footerBottom">
                    <h6 className='text-light h5 fw-normal py-3'>Contactos</h6>
                    
                    <div className='d-flex justify-content-around align-items-center'>
                        <a href="#" className='link-light text-center col-lg-4 col'>jorge.favier@etec.um.edu.ar</a>
                        <a href="#" className='link-light  text-center col-lg-4 col'>contacto.repi@um.edu.ar</a>
                        <p className='text-light m-0 text-center col-lg-4 col'>Repi: +54 261 420 2017</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

 
export default Footer;