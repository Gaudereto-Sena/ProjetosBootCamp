import React, { useState } from 'react'
import styles from './Checkout.module.css'
import Header from '../../componentes/Header'
import Lista from '../../componentes/Lista'
import Text from '../../componentes/Text'
import TextField from '../../componentes/TextField'
import Button from '../../componentes/Button'
import { Stack } from '@mui/material'
import Footer from '../../componentes/Footer'

const Checkout = ({ carrinho, usuario, setCarrinho }) => {
    const [endereco, setEndereco] = useState('')
    const [enderecoNumero, setEnderecoNumero] = useState()
    const [nomeDestinatario, setNomeDestinatario] = useState('')
    const [complemento, setComplemento] = useState('')
    const [precoTotal, setPrecoTotal] = useState()

    console.log(carrinho)

    return (
        <>
            <Header />
            <div className={styles.checkout}>
                <Text
                    type={'h2'}>
                    Checkout
                </Text>
                <Lista
                    id={styles.lista_produtos}
                    itens={carrinho}
                    isCheckout={true}
                    setCarrinho={setCarrinho}
                    estiloInline={{
                        width: '100%'
                    }}
                    textoVazio='Nenhum item selecionado'
                />

                <div className={styles.checkout_dados}>
                    <form>
                        <TextField
                            label='Destinatario'
                            type='text'
                            placeholder='Digite o nome do destinatario'
                            value={nomeDestinatario}
                            funcaoOnChange={(value) => setNomeDestinatario(value)}
                            required={true}
                        />
                        <TextField
                            label='Endereço'
                            type='text'
                            placeholder='Digite seu endereço'
                            value={endereco}
                            funcaoOnChange={(value) => setEndereco(value)}
                            required={true}
                        />
                        <div className={styles.checkout_dados_endereco}>

                            <TextField
                                label='Nº'
                                type='text'
                                placeholder='Digite o numero'
                                value={enderecoNumero}
                                funcaoOnChange={(value) => setEnderecoNumero(value)}
                                required={true}
                                estiloInline={{
                                    paddingRight: '48px',
                                    width: '100%'
                                }}
                            />
                            <TextField
                                label='Complemento'
                                type='text'
                                placeholder='Apartamento/casa'
                                value={complemento}
                                funcaoOnChange={(value) => setComplemento(value)}
                                required={true}
                                estiloInline={{
                                    width: '100%'
                                }}
                            />

                        </div>
                        <Stack id={styles.btn_container}>
                            <Button
                                estiloInline={{
                                    marginLeft: 'auto'
                                }}>
                                Finalizar a compra
                            </Button>
                        </Stack>
                    </form>
                </div>
            </div>

<Footer />
        </>
    )
}

export default Checkout
