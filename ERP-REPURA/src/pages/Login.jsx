import logoImage from "../assets/RepuraLogoNew 1.svg";

const Login = () => {
    return (
        <>
            <div className="loginContainer">

                <div className="logo">
                    <img src={logoImage} alt="imagenLogo" />
                </div>
                <div className="login">
                    <form action="">

                        <div className="input--login">
                            <label className="input--login__label" htmlFor="username">Nombre de Usuario</label>
                            <input className="input--login__input" type="text" id="username" placeholder="Nombre de Usuario" />
                        </div>

                        <div className="input--login">
                            <label className="input--login__label" htmlFor="password">Contraseña</label>
                            <input className="input--login__input" type="password" id="password" placeholder="Contraseña" />
                        </div>

                        <button className="boton--login" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
