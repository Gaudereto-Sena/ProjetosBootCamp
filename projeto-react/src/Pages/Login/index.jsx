import React, { useState } from 'react';
import Avatar from '../../componentes/Avatar';
import Button from '../../componentes/Button';
import TextField from '../../componentes/TextField';
import styles from "./Login.module.css"
import redSpot from "../../assets/images/jupiter-red-spot.jpg"
import PlanetLogo from '../../componentes/PlanetLogo';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ aoLogar, dadosUsuariosRegistrados }) => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const enviarForm = (event) => {
        event.preventDefault();
        let user = dadosUsuariosRegistrados.map(usuario => usuario.email).includes(email) ? dadosUsuariosRegistrados.filter(usuario => usuario.email === email) : null
        user !== null ? (user[0].senha === senha ? logar(user[0]) : alert('Email ou senha incorretos')) : alert('Email ou senha incorretos')
    }

    const logar = (usuario) => {
        aoLogar(usuario)
        navigate('/catalogo')
    }

    return (
        <div className={styles.login}>
            <Avatar
                id={styles.background_login_image}
                isBackgroundImage={true}
                image={redSpot}
                backgroundSize="cover"
                containerEstiloInline={{
                    height: "100%",
                    width: "100%",
                }}
                hasMask={true}
                maskStyle={{
                    backgroundImage: "linear-gradient(to right, transparent,transparent,transparent,transparent, var(--cor-fundo))"
                }}
            />

            <div className={styles.login_form_container}>
                <PlanetLogo />
                <form onSubmit={(event) => enviarForm(event)}>
                    <TextField
                        label="E-mail"
                        id="email"
                        type="email"
                        required={true}
                        value={email}
                        placeholder="Insira seu e-mail"
                        funcaoOnChange={value => setEmail(value)}
                    />
                    <TextField
                        label="Senha"
                        id="senha"
                        type="password"
                        required={true}
                        value={senha}
                        placeholder="Coloque sua senha"
                        funcaoOnChange={value => setSenha(value)}
                    />
                    <Button
                        estiloInline={
                            {}
                        }>
                        Fazer Login
                    </Button>
                </form>
                <Link to="/register">
                    <Button id={styles.botao_ir_register}>
                        Registrar
                    </Button>
                </Link>
            </div>
        </div >
    )
}

export default Login;
