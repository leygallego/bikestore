import React, { useState } from 'react';
import firebaseApp from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
signInWithRedirect, GoogleAuthProvider
} from 'firebase/auth';
import './styles/Login.css'

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider()

const Login = () => {

    const [estaRegistrandose, setEstaRegistrandose] = useState(false);

    const submitHandler = async (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (estaRegistrandose) {
            createUserWithEmailAndPassword(auth,email,password)
        } else {
            signInWithEmailAndPassword(auth, email, password)
        }
        console.log("SUBMITHANDLER===",email, password);
    }



    return (
        <>
            <div className="login-wraper">
            {estaRegistrandose 
                ? 
                <div className="logo-inicioSesion">
                    <h2>Bikestore<font>app</font></h2>
                  <h3>Regístrate</h3>      
                </div> : <div className="logo-inicioSesion">
                    <h2>Bikestore<font>app</font></h2>
                  <h3>Inicia Sesión</h3>      
                </div> }
            
            <form onSubmit={submitHandler}>
                <label htmlFor="">Iniciar sesión</label>
                <input className="login-style" type="email" name="email" placeholder="Ingrese su email" />
                <input
                 className="login-style" 
                 type="password" name="password" placeholder="ingrese su contraseña" />
                <input 
                className="login-style" 
                type="submit" value={estaRegistrandose ? "Regístrate" : "Inicia Sesión"} />

            </form>
            <input type="button" value="Accede con google"
            onClick={()=>{
                signInWithRedirect(auth, googleProvider)
            }}
            />
            <input 
            type="button" 
            onClick={()=>{setEstaRegistrandose(!estaRegistrandose)}}
            value={estaRegistrandose ? "¿Ya tienes cuenta? Inicia Sesión" : "¿No tienes cuenta? Regístrate"} 
            
        />
            </div>
                

        </>
    );
}

export default Login;
