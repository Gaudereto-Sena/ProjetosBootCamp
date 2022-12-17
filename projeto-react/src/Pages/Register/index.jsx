import React from 'react'
import { useState } from 'react'
import Avatar from '../../componentes/Avatar'
import TextField from '../../componentes/TextField'
import styles from './Register.module.css'
import PlanetLogo from '../../componentes/PlanetLogo'
import redSpot from "../../assets/images/jupiter-red-spot.jpg"
import Button from '../../componentes/Button'
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ aoRegistrado, dadosUsuariosRegistrados }) => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const navigate = useNavigate()

    const registrar = (event) => {
        event.preventDefault()
        let usuarioJaCadastrado;
        if (senha === confirmarSenha) {
            dadosUsuariosRegistrados !== null ? usuarioJaCadastrado = dadosUsuariosRegistrados.filter(usuario => usuario.email === email) : usuarioJaCadastrado = [];
            usuarioJaCadastrado.length === 0 ? registroConcluido() : alert('Este e-mail já está cadastrado')
        } else {
            alert('Senhas não são iguais')
        }
    }

    const registroConcluido = () => {
        aoRegistrado({ nome, sobrenome, email, senha })
        setNome('')
        setSobrenome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
        navigate("/login")
    }

    return (
        <div className={styles.register}>
            <Avatar
                id={styles.background_register_image}
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
            <div className={styles.register_form_container}>
                <PlanetLogo
                    style={{
                        transform: 'scale(0.7)'
                    }}
                />
                <form onSubmit={(event) => registrar(event)}>
                    <TextField
                        id='nome'
                        label='Nome'
                        type='text'
                        required={true}
                        placeholder='Insira seu nome'
                        value={nome}
                        funcaoOnChange={valor => setNome(valor)}
                    />
                    <TextField
                        id='sobrenome'
                        label='Sobrenome'
                        type='text'
                        required={true}
                        placeholder='Insira seu sobrenome'
                        value={sobrenome}
                        funcaoOnChange={valor => setSobrenome(valor)}
                    />
                    <TextField
                        label="E-mail"
                        id="email"
                        type="email"
                        required={true}
                        placeholder="Insira seu e-mail"
                        value={email}
                        funcaoOnChange={value => setEmail(value)}
                    />
                    <TextField
                        label="Senha"
                        id="senha"
                        type="password"
                        required={true}
                        placeholder="Coloque sua senha"
                        value={senha}
                        funcaoOnChange={value => setSenha(value)}
                    />
                    <TextField
                        label="Confirmar senha"
                        id="confirmarSenha"
                        type="password"
                        required={true}
                        placeholder="Confirme a senha"
                        value={confirmarSenha}
                        funcaoOnChange={value => setConfirmarSenha(value)}
                    />
                    <Button>
                        Registrar
                    </Button>
                </form>
                <Link to="/login">
                    <Button id={styles.botao_ir_login}>
                        Login
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default Register
