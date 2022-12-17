import React from 'react'
import styles from './Carrinho.module.css'
import Header from '../../componentes/Header'
import Lista from '../../componentes/Lista'
import Text from '../../componentes/Text'
import Button from '../../componentes/Button'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/system'
import Footer from '../../componentes/Footer'

const Carrinho = ({ setCarrinho, carrinho, usuario }) => {
    const navigate = useNavigate()

    const finalizarCompra = (itens) => {
        console.log(itens)
        navigate('/checkout')
    }

    return (
        <>
            <Header />

            <div className={styles.carrinho}>
                <Text
                    type={'h2'}>
                    Carrinho
                </Text>
                <Lista itens={carrinho} setCarrinho={setCarrinho} textoVazio='Nenhum item no carrinho' />
                <Stack id={styles.btn_container}>
                    <Button
                        funcaoOnClick={() => finalizarCompra(carrinho)}
                    >
                        Finalizar compra
                    </Button>
                </Stack>

            </div>

            <Footer/>


        </>
    )
}

export default Carrinho