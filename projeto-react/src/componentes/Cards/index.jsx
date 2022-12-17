import React, { useLayoutEffect, useRef } from 'react'
import styles from './Cards.module.css'
import Avatar from '../Avatar'
import Text from '../Text'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SegmentIcon from '@mui/icons-material/Segment';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Toltip } from '../Toltip';


const Cards = ({ itens, hasFiltered, setHasFiltered, addCarrinho }) => {

  const ref = useRef(null);
  const card = useRef(null)
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(320)
  const [lengthDisplay, setLengthDisplay] = useState(width / cardWidth);
  const [maxLength, setMaxLength] = useState((itens.length - lengthDisplay) * -cardWidth);
  const [translate, setTranslate] = useState(0)
  const [translateText, setTranslateText] = useState('')

  const setWindowDimensions = () => {
    setWidth(ref.current.offsetWidth);
    setCardWidth(card.current.offsetWidth)
  }

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setCardWidth(card.current.offsetWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    setWidth(ref.current.offsetWidth);
    setCardWidth(card.current.offsetWidth)
  }, [])

  const cardsBackwards = () => {
    translate < -cardWidth ? setTranslate(translate + cardWidth) : setTranslate(0)
  }
  const cardsForward = () => {
    setLengthDisplay(width / cardWidth)
    setMaxLength((itens.length - lengthDisplay) * -cardWidth)
    translate > maxLength ? setTranslate(translate - cardWidth) : setTranslate(translate)
  }

  useEffect(() => {
    setTranslateText('translate(' + translate + 'px)')
  }, [translate])

  useEffect(() => {
    hasFiltered ? setTranslate(0) : setTranslate(translate)
    setTranslateText('translate(' + translate + 'px)')
    setLengthDisplay(width / cardWidth)
    setMaxLength((itens.length - lengthDisplay) * -cardWidth)
    setHasFiltered(false)
  }, [hasFiltered])



  return (
    
    <div className={styles.container} >
      <div className={styles.mask_right}></div>
      <div className={styles.mask_left}></div>
      <div className={styles.container_cards} ref={ref}>
        {
          
          itens.map((item) => {
            return (
              <div ref={card} key={item.id} className={styles.card} style={{ transform: translateText }}>
                <Avatar
                  id={styles.astro_image}
                  isBackgroundImage={true}
                  image={item.imagem}
                  hasMask={true}
                  maskStyle={{
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(transparent, transparent, black, black)',
                    borderRadius: '100%',
                  }}
                  containerEstiloInline={{
                    backgroundColor: 'black',
                    borderRadius: '100%',
                    width: '100%',
                    height: '320px',
                    backgroundRepeat: 'no-repeat'
                  }}
                  backgroundSize="cover"
                />
                <div className={styles.card_info}>
                  <Text
                    type='h3'>
                    {item.nome}
                  </Text>
                  <Text
                    type='p'
                    estiloInline={{
                      color: 'white'
                    }}>
                    {item.preco}
                  </Text>
                  <div className={styles.cards_buttons}>
                    <Link to={`/produto/${item.id}`}>
                      <button
                        id={styles.button_saber_mais}>
                        <SegmentIcon />
                      </button>
                    </Link>
                    <button
                      onClick={(event) => addCarrinho(event, item)}
                      id={styles.button_carrinho}>
                        
                      <AddShoppingCartIcon
                        fill='#fff' />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div id={styles.button_back}><ArrowBackIosNewIcon onClick={() => cardsBackwards()} /></div>
        <div id={styles.button_forward} ><ArrowForwardIosIcon onClick={() => cardsForward()} /></div>
      </div>
    </div>
  )
}

export default Cards