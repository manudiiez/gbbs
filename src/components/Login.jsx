import '../styles/styles.scss'

import Axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2'

// damos la uri de nuestro backend
// BACKEND EN DESARROLLO
const URI = 'http://localhost:8000/users/'

const Login = () => {
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate()
    const [formState, setFormState] = useState(false);

    const createUser = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'En desarrollo',
            showConfirmButton: true,
            icon: 'warning',
        }).then(() => {
            window.location = '/'
        })
    }

    const cookies = new Cookies();


    const login = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'En desarrollo',
            showConfirmButton: true,
            icon: 'warning',
        }).then(() => {
            window.location = '/'
        })
    }

    return(
        <div id="login">
            <div className="container-md p-5">
                <div className="row backgroundContainer">
                    <div className="col-lg-6  backgroundContainerLogin">
                        {/* <!-- Login --> */}
                        <h3>¿Ya tienes cuenta?</h3>
                        <p>Inicie sesion para entrar a la pagina</p>
                        <button id="btn-login" onClick={()=> setFormState(!formState)}>Iniciar Sesion</button>
                    </div>
                    <div className="col-lg-6 backgroundContainerSignIn">
                        {/* <!-- Singin --> */}
                        <h3>¿Aun no tienes cuenta?</h3>
                        <p>Registrate para entrar a la pagina</p>
                        <button id="btn-singin" onClick={()=> setFormState(!formState)}>Registrarse</button>
                    </div>
                </div>
                <div className={`row formsContainer ${formState ? 'toRegister' : 'toLogin'}`}>
                    <form onSubmit={login} className={`formLogin`}>
                        {/* <!-- Login --> */}
                        <h2>Iniciar sesion</h2>
                        <input type="text" placeholder="Nombre de usuario" onChange={(e) => {setUsername(e.target.value)}}/>
                        <input type="password" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value)}}/>
                        <button type="submit">Ingresar</button>
                    </form>
                    <form onSubmit={createUser} className={`formRegister`}>
                        {/* <!-- Singin --> */}
                        <h2>Registro</h2>
                        <input type="text" placeholder="Nombre Completo"/>
                        <input type="text" placeholder="Nombre de Usuario" onChange={(e) => {setUsername(e.target.value)}}/>
                        <input type="text" placeholder="Correo Electronico" onChange={(e) => {setEmail(e.target.value)}}/>
                        <input type="password" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value)}}/>
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default Login