import React, { useEffect } from 'react'
import Avatar from '../Avatar'
import Text from '../Text'
import Button from '../Button'
import Tags from '../Tags'
import styles from './ProdutoIndividual.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom'
import { Chip, Tooltip } from '@mui/material'

export const ProdutoIndividual = ({ item, addCarrinho }) => {
  const {
    id,
    nome,
    imagem,
    preco,
    tag,
    descricao
  } = item


  return (
    <div className={styles.produto}>
      <div className={styles.texto_container}>
        <Text type={'h2'}>
          {nome}
        </Text>

        <Chip
          sx={{
            backgroundColor: 'var(--cor-detalhes)',
            marginBottom: '48px',
            fontWeight: 'bold'
          }}
          label={tag} />

        <Text type={'p'}>
          {descricao}
        </Text>

        <Button
          estiloInline={{
            marginTop: '64px'
          }}
          funcaoOnClick={(event) => addCarrinho(event, item)}
        >
          Adicionar ao carrinho
        </Button>



      </div>

      <div className={styles.btn_voltar}>
        <Link to='/catalogo'>
          <ArrowBackIosNewIcon />
        </Link>
      </div>


      <div className={styles.imagem_container}>
        <Avatar
          isBackgroundImage={true}
          backgroundSize={'cover'}
          image={imagem}
          hasMask={true}
          maskStyle={{
            width: '100%',
            height: '100%',
            background: "linear-gradient(to right, var(--cor-fundo), transparent, transparent, transparent, transparent )"
          }}
          containerEstiloInline={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>

    </div>
  )
}
