import { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/styles.scss'

import Antena from '../img/antena.png'
import Contacto from '../img/contacto.jpg'
import Space from '../img/Space.jpg'
import Radio from '../img/radioaficion.jpg'
import Alien from '../img/alien.jpg'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";


const ObjetoForo = () => {

    const [answerState, setAnswerState] = useState(false);
    const {id} = useParams()
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

    const [objetoForo, setObjetoForo] = useState(arrForos[id]);

    
    console.log(id)


    return (  
        <div id="objetoForo">
            <div className="container-lg">
                <div className="row py-5 foroTitle">
                    <h2 className='text-center text-light py-3'>{objetoForo.title}</h2>
                </div>
                <div className="row foroMain">
                    <div className="col">
                        <div className="row justify-content-between align-items-center foroHeader pb-2">
                            <div className="col-6">
                                <FontAwesomeIcon className='pe-2' icon={faCircle}></FontAwesomeIcon>
                                Activos: 23
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <a href="#" className="link-light">Unirse</a>
                                <a href="#" className="link-light">Bloquear</a>
                            </div>
                        </div>
                        <div className="m-0 row justify-content-between align-items-center bg-light pb-4 mb-4 foroContent">
                            <div className="m-0 row justify-content-between align-items-center contentHeader py-3">
                                <h3 className='col-6 text-start fw-normal'>{objetoForo.creator}</h3>
                                <h4 className='col-6 text-end fw-normal'>{objetoForo.date}</h4>
                            </div>
                            <div className="m-0 row contentMain">
                                <div className="col-lg-6 col-12 mainText px-4 mx-3">
                                    <h5>{objetoForo.subtitle}</h5>
                                    <p>{objetoForo.description}</p>

                                    <div className='d-flex align-items-center' onClick={() => {setAnswerState(!answerState)}}>
                                        <p className='mb-1 pe-2 text-primary'>Ver respuestas a este mensaje</p>
                                        <span className="badge bg-primary rounded-pill">
                                            <FontAwesomeIcon icon={ answerState ? faAngleDown : faAngleRight }/>
                                    </span>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12 mainImg d-flex align-items-center pt-3">
                                    <img src={objetoForo.img} alt="" />
                                </div>
                            </div>
                        </div>

                        {
                            answerState ? (
                                <div className="m-0 row justify-content-between align-items-center bg-light pb-4 pt-4 mb-4 foroContentChild px-4">
                                    <div className="col-12 foroContainer">
                                        <div className="m-0 row justify-content-between align-items-center contentHeader py-3">
                                            <h3 className='col-6 text-start fw-normal'>valenGG responde a manolito123</h3>
                                            <h4 className='col-6 text-end fw-normal'>20/03/2022 a las 15:00  </h4>
                                        </div>
                                        <div className="m-0 row contentMain">
                                            <div className="col mainText">
                                                <h5>¿Existen los alienigenas?</h5>
                                                <p>Tengo pruebas de que los alienigenas son reales y estan entre nosotros smwoICV NVJ VCJSD VJ SCaso jdv sodv afod vasm vdvk sdvjmc sdjjjjjjjjjjjcna Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.1</p>

                                                <div className='d-flex align-items-center' onClick={() => {setAnswerState(!answerState)}}>
                                                    <p className='mb-1 pe-2 text-primary'>Ver respuestas a este mensaje</p>
                                                    <span className="badge bg-primary rounded-pill">
                                                        <FontAwesomeIcon icon={ answerState ? faAngleDown : faAngleRight }/>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ):(
                                <span className='d-none'></span>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ObjetoForo;