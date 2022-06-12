import Alien from '../img/alien.jpg'
import Antena from '../img/antena.png'
import Contacto from '../img/contacto.jpg'
import Space from '../img/Space.jpg'
import Radio from '../img/radioaficion.jpg'

import '../styles/styles.scss'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Foros = () => {

    const forosContainer = useRef()

    const [recientes, setRecientes] = useState(false);
    const [favoritos, setFavoritos] = useState(false);
    const [creados, setCreados] = useState(false);
    const [foroNav, setForoNav] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
    
    const [arrForos, setArrForos] = useState([
        {
            title:'Nueva antena: BIG SIGNAL SkyLoop-46',
            img: Antena,
            subtitle: 'La empresa española BIG SIGNAL acaba de presentar su nueva antena para 50 y 70 Mhz: BIG SIGNAL SkyLoop-46. ',
            description: 'Descubre nuestra nueva novedad, la antena BIG SIGNAL SkyLoop-46 un innovador diseño de antena loop Dual-Band de longitud de onda completa en 50 y 70 MHz. La antena BIG SIGNAL SkyLoop-46 te ofrece una excelente opción de antena omnidireccional para trabajar las bandas de 4 y 6 metros en una sola antena y un unico coaxial, ideal para espacios reducidos para no perderte ninguna esporadica esta temporada! Ventajas de elegir la antena BIG SIGNAL SkyLoop-46 frente a una antena vertical tradicional, dipolo, o similar?',
            date: '03/06/2022 a las 13:00',
            category: 'radioaficion',
            creator: 'admin11'
        },
        {
            title:'Hoy lunes ISS en 437.525 con colegio italiano!',
            img: Contacto,
            subtitle: 'Hoy lunes contacto desde la ISS con un colegio de Cerdeña, Italia. ',
            description: 'La ISS llamará a la IKØWGF. Hoy lunes 6 de junio  a las 13.43 EA, 11.43 GMT Lo emitirán en: https://youtube.com/channel/UCVmGUvZkLAMhErRQQ6AkVMA',
            date: '06/06/2022 a las 10:00',
            category: 'noticias',
            creator: 'admin11'
        },
        {
            title:'Hoy sabado- Astronauta Samantha en italiano por 145.800',
            img: Space,
            subtitle: 'HOY SABADO contacto desde la ISS con estudiantes del Istituto Comprensivo “Losapio–S.F. Neri”, Gioia del Colle, Puglia, Italia.',
            description: 'El contacto será en italiano con la astronauta Samantha Cristoforetti IZØUDF, siempre en 145.800. SABADO 4 de JUNIO a las 11.43 GMT en 145.800  Se emitirá aqui   https://www.youtube.com/channel/UCmfI6IhajshGME8jZTdjBrA, ',
            date: '04/06/2022 a las 12:00',
            category: 'noticias',
            creator: 'admin11'
        },
        {
            title:'¿Que es la Radioafición?',
            img: Radio,
            subtitle: 'La gran pregunta',
            description: 'La radioafición es un servicio de la Unión Internacional de Telecomunicaciones que tiene por objeto: "La autoinstrucción, la intercomunicación y las investigaciones técnicas efectuados por aficionados, esto es, por personas debidamente autorizadas que se interesan en la radiotécnica, con carácter exclusivamente personal y sin fines de lucro". Esta definición aceptada universalmente por todas las naciones hace especial hincapié en la faz técnica y educativa de la actividad, la que se define oficial y formalmente como amateur, no como hobby',
            date: '11/06/2022 a las 12:14',
            category: 'radioaficion',
            creator: 'admin11'
        },
        {
            title:'Nueva antena: BIG SIGNAL SkyLoop-4622',
            img: Antena,
            subtitle: 'La empresa española BIG SIGNAL acaba de presentar su nueva antena para 50 y 70 Mhz: BIG SIGNAL SkyLoop-46. ',
            description: 'Descubre nuestra nueva novedad, la antena BIG SIGNAL SkyLoop-46 un innovador diseño de antena loop Dual-Band de longitud de onda completa en 50 y 70 MHz. La antena BIG SIGNAL SkyLoop-46 te ofrece una excelente opción de antena omnidireccional para trabajar las bandas de 4 y 6 metros en una sola antena y un unico coaxial, ideal para espacios reducidos para no perderte ninguna esporadica esta temporada! Ventajas de elegir la antena BIG SIGNAL SkyLoop-46 frente a una antena vertical tradicional, dipolo, o similar?',
            date: '03/06/2022 a las 13:00',
            category: 'radioaficion',
            creator: 'admin11'
        },
        {
            title:'Hoy lunes ISS en 437.525 con colegio italiano22!',
            img: Contacto,
            subtitle: 'Hoy lunes contacto desde la ISS con un colegio de Cerdeña, Italia. ',
            description: 'La ISS llamará a la IKØWGF. Hoy lunes 6 de junio  a las 13.43 EA, 11.43 GMT Lo emitirán en: https://youtube.com/channel/UCVmGUvZkLAMhErRQQ6AkVMA',
            date: '06/06/2022 a las 10:00',
            category: 'noticias',
            creator: 'admin11'
        },
        {
            title:'Hoy sabado- Astronauta Samantha en italiano por 145.80022',
            img: Space,
            subtitle: 'HOY SABADO contacto desde la ISS con estudiantes del Istituto Comprensivo “Losapio–S.F. Neri”, Gioia del Colle, Puglia, Italia.',
            description: 'El contacto será en italiano con la astronauta Samantha Cristoforetti IZØUDF, siempre en 145.800. SABADO 4 de JUNIO a las 11.43 GMT en 145.800  Se emitirá aqui   https://www.youtube.com/channel/UCmfI6IhajshGME8jZTdjBrA, ',
            date: '04/06/2022 a las 12:00',
            category: 'noticias',
            creator: 'admin11'
        },
        {
            title:'¿Que es la Radioafición22?',
            img: Radio,
            subtitle: 'La gran pregunta',
            description: 'La radioafición es un servicio de la Unión Internacional de Telecomunicaciones que tiene por objeto: "La autoinstrucción, la intercomunicación y las investigaciones técnicas efectuados por aficionados, esto es, por personas debidamente autorizadas que se interesan en la radiotécnica, con carácter exclusivamente personal y sin fines de lucro". Esta definición aceptada universalmente por todas las naciones hace especial hincapié en la faz técnica y educativa de la actividad, la que se define oficial y formalmente como amateur, no como hobby',
            date: '11/06/2022 a las 12:14',
            category: 'radioaficion',
            creator: 'admin11'
        },
        {
            title:'Nueva antena: BIG SIGNAL SkyLoop-4633',
            img: Antena,
            subtitle: 'La empresa española BIG SIGNAL acaba de presentar su nueva antena para 50 y 70 Mhz: BIG SIGNAL SkyLoop-46. ',
            description: 'Descubre nuestra nueva novedad, la antena BIG SIGNAL SkyLoop-46 un innovador diseño de antena loop Dual-Band de longitud de onda completa en 50 y 70 MHz. La antena BIG SIGNAL SkyLoop-46 te ofrece una excelente opción de antena omnidireccional para trabajar las bandas de 4 y 6 metros en una sola antena y un unico coaxial, ideal para espacios reducidos para no perderte ninguna esporadica esta temporada! Ventajas de elegir la antena BIG SIGNAL SkyLoop-46 frente a una antena vertical tradicional, dipolo, o similar?',
            date: '03/06/2022 a las 13:00',
            category: 'radioaficion',
            creator: 'admin11'
        },
        {
            title:'Hoy lunes ISS en 437.525 con colegio italiano33!',
            img: Contacto,
            subtitle: 'Hoy lunes contacto desde la ISS con un colegio de Cerdeña, Italia. ',
            description: 'La ISS llamará a la IKØWGF. Hoy lunes 6 de junio  a las 13.43 EA, 11.43 GMT Lo emitirán en: https://youtube.com/channel/UCVmGUvZkLAMhErRQQ6AkVMA',
            date: '06/06/2022 a las 10:00',
            category: 'noticias',
            creator: 'admin11'
        },
        {
            title:'Hoy sabado- Astronauta Samantha en italiano por 145.80033',
            img: Space,
            subtitle: 'HOY SABADO contacto desde la ISS con estudiantes del Istituto Comprensivo “Losapio–S.F. Neri”, Gioia del Colle, Puglia, Italia.',
            description: 'El contacto será en italiano con la astronauta Samantha Cristoforetti IZØUDF, siempre en 145.800. SABADO 4 de JUNIO a las 11.43 GMT en 145.800  Se emitirá aqui   https://www.youtube.com/channel/UCmfI6IhajshGME8jZTdjBrA, ',
            date: '04/06/2022 a las 12:00',
            category: 'noticias',
            creator: 'admin11'
        },
        {
            title:'¿Que es la Radioafición33?',
            img: Radio,
            subtitle: 'La gran pregunta',
            description: 'La radioafición es un servicio de la Unión Internacional de Telecomunicaciones que tiene por objeto: "La autoinstrucción, la intercomunicación y las investigaciones técnicas efectuados por aficionados, esto es, por personas debidamente autorizadas que se interesan en la radiotécnica, con carácter exclusivamente personal y sin fines de lucro". Esta definición aceptada universalmente por todas las naciones hace especial hincapié en la faz técnica y educativa de la actividad, la que se define oficial y formalmente como amateur, no como hobby',
            date: '11/06/2022 a las 12:14',
            category: 'radioaficion',
            creator: 'admin11'
        }
        
    ])

    const [arrGod, setArrGod] = useState([
        {title: 'go1'},
        {title: 'go2'},
        {title: 'go3'},
        {title: 'go4'},
        {title: 'go5'},
        {title: 'go6'},
        {title: 'go7'},
        {title: 'go8'},
        {title: 'go9'},
        {title: 'go10'},
        {title: 'go11'},
        {title: 'go12'},
        {title: 'go13'},
        {title: 'go14'},
        {title: 'go15'},
        {title: 'go16'}
    ]);

    const navigate = useNavigate()


    const verForo = async(id) => {
        navigate(`/objetoforo/${id}`)
    }

    const filteredForos = () => {
        

        if(search.length === 0){
            return arrForos.slice(currentPage, currentPage+5)
        }

        const filtered = arrForos.filter( foro => foro.title.includes( search ) )
        return filtered.slice(currentPage, currentPage + 5)



    }

    const nextPage = () => {
        if(arrForos.filter( foro => foro.title.includes( search ) ).length > currentPage + 5){
            setCurrentPage(currentPage + 5)
        }
    }

    const prevPage = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 5)
        }
    }

    const onSearchChangue = (event) => {
        setCurrentPage(0)
        setSearch(event)
    }

    return (  
        <div id="foros">
            <div className="container-lg">
                <h2 className='text-light text-center forosTitle p-5'>El Global Bulletin Board System <br /><hr /><br /> GBBS</h2>
                <div className="row justify-content-center">
                    <ul className="forosNavbarPhone list-group d-lg-none col-11 p-0 mb-3 position-sticky">
                        <li className="list-group-item d-flex list-group-item-secondary justify-content-center align-items-center listInput">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 list-group-item-secondary" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => {onSearchChangue(e.target.value)}} value={search}/>
                                <button className="btn btn-outline-secondary" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </form>
                            <button className="btn btn-outline-secondary barsInput" onClick={() => {setForoNav(!foroNav)}}>
                                <FontAwesomeIcon icon={faBars}/>
                            </button>

                        </li>
                        <ul className={`p-0 ${foroNav ? 'listCollapse--show' : 'listCollapse'}`}>
                            <li className={` list-group-item list-group-item-secondary justify-content-between align-items-center py-3`}>
                                Todos
                            </li>
                            <li className={` list-group-item list-group-item-secondary justify-content-between align-items-center py-3`}>
                                Destacados
                            </li>
                            <li className={`d-flex list-group-item list-group-item-secondary justify-content-between align-items-center py-3`} onClick={() => {setRecientes(!recientes)}}>
                                Recientes
                                <span className="badge bg-primary rounded-pill">
                                    <FontAwesomeIcon icon={ recientes ? faAngleDown : faAngleRight }/>
                                </span>
                            </li>
                            {
                                recientes ?(
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>

                                    </ul>

                                ):(
                                    <span className='d-none'></span>
                                )
                            }
                            <li className={` list-group-item list-group-item-secondary justify-content-between align-items-center py-3`}>
                                Nuevos
                            </li>
                            <li className="d-flex list-group-item list-group-item-secondary justify-content-between align-items-center py-3" onClick={(e) => {setFavoritos(!favoritos)}}>
                                Favoritos
                                <span className="badge bg-primary rounded-pill">
                                    <FontAwesomeIcon icon={ favoritos ? faAngleDown : faAngleRight }/>
                                </span>
                            </li>
                            {
                                favoritos ?(
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>

                                    </ul>

                                ):(
                                    <span className='d-none'></span>
                                )
                            }
                            <li className="d-flex list-group-item list-group-item-secondary justify-content-between align-items-center py-3" onClick={(e) => {setCreados(!creados)}}>
                                Creados
                                <span className="badge bg-primary rounded-pill">
                                    <FontAwesomeIcon icon={ creados ? faAngleDown : faAngleRight }/>
                                </span>
                            </li>
                            {
                                creados ?(
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>

                                    </ul>

                                ):(
                                    <span className='d-none'></span>
                                )
                            }
                        </ul>
                    </ul>
                    <div className="col-lg-4 col-11 forosSidebarContainer">
                        <div className="position-sticky forosSidebar">
                            <ul className="list-group d-lg-block d-none">
                                <li className="list-group-item d-flex justify-content-center align-items-center listInput">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {onSearchChangue(e.target.value)}} value={search}/>
                                    <button className="btn btn-outline-primary" type="submit">
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </button>
                                </form>
                                </li>
                                <li className="d-lg-flex d-none list-group-item justify-content-between align-items-center py-3">
                                    Todos
                                </li>
                                <li className="d-lg-flex d-none list-group-item d-flex justify-content-between align-items-center py-3">
                                    Destacados
                                </li>
                                <li className="d-lg-flex d-none list-group-item d-flex justify-content-between align-items-center py-3" onClick={(e) => {setRecientes(!recientes)}}>
                                    Recientes
                                    <span className="badge bg-primary rounded-pill">
                                        <FontAwesomeIcon icon={ recientes ? faAngleDown : faAngleRight }/>
                                    </span>
                                </li>

                                {
                                    recientes ?(
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>

                                        </ul>

                                    ):(
                                        <span className='d-none'></span>
                                    )
                                }

                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                    Nuevos
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center py-3" onClick={(e) => {setFavoritos(!favoritos)}}>
                                    Favoritos
                                    <span className="badge bg-primary rounded-pill">
                                        <FontAwesomeIcon icon={ favoritos ? faAngleDown : faAngleRight }/>
                                    </span>
                                </li>

                                {
                                    favoritos ?(
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                        </ul>

                                    ):(
                                        <span className='d-none'></span>
                                    )
                                }
                                <li className="list-group-item d-flex justify-content-between align-items-center py-3" onClick={(e) => {setCreados(!creados)}}>
                                    Creados
                                    <span className="badge bg-primary rounded-pill">
                                        <FontAwesomeIcon icon={ creados ? faAngleDown : faAngleRight }/>
                                    </span>
                                </li>
                                {
                                    creados ?(
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-primary">Crear un foro</li>
                                            <li className="list-group-item list-group-item-primary">Mi primer foro</li>
                                            <li className="list-group-item list-group-item-primary">Mi segundo foro</li>
                                        </ul>

                                    ):(
                                        <span className='d-none'></span>
                                    )
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-8 col-11 forosContent">
                        <div className="row" ref={forosContainer}>
                            
                            {/* {
                                arrForos.map( foro => {
                                    return(
                                        <div className="col-12 card mb-3" onClick={() => {verForo(arrForos.indexOf(foro))}}>
                                            <div className="row g-0 p-3">
                                                <div className="col-md-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{foro.title}</h5>
                                                        <p className="card-text">{foro.subtitle}</p>
                                                        <p className="card-text"><small className="text-muted">CREADOR: {foro.creator}</small></p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-muted">{foro.date}</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 px-3">
                                                    <img src={foro.img} className="img-fluid rounded-start" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            } */}

                            {
                                filteredForos().map( (foro) => (
                                    <div className="col-12 card mb-3" key={arrForos.indexOf(foro)} onClick={() => {verForo(arrForos.indexOf(foro))}}>
                                        <div className="row g-0 p-3">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">{foro.title}</h5>
                                                    <p className="card-text">{foro.subtitle}</p>
                                                    <p className="card-text"><small className="text-muted">CREADOR: {foro.creator}</small></p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">{foro.date}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-5 px-3">
                                                <img src={foro.img} className="img-fluid rounded-start" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="row m-3 justify-content-center align-items-center">
                            <button type="button" className="btn btn-primary col-1 mx-2" onClick={prevPage}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </button>
                            <button type="button" className="btn btn-primary col-1 mx-2" onClick={nextPage}>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 


export default Foros;