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

                        <div className="userName">
                            <label htmlFor="username">Nombre de Usuario</label>
                            <input type="text" id="username" value="Nombre de Usuario" />
                        </div>

                        <div className="password">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" value="Contraseña" />
                        </div>

                        <button type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
