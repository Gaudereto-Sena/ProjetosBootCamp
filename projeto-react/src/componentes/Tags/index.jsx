import React from 'react'
import styles from './Tags.module.css'

const Tags = ({ tags, filtrarProdutos}) => {
    return (
        <div className={styles.tags}>
            <ul className={styles.tags_lista}>
                {tags.map(tag => {
                    return <li key={tag} onClick={() => filtrarProdutos(tag)}>{tag}</li>
                })}
                <li onClick={() => filtrarProdutos('todos')}>Todos</li>
            </ul>
        </div>
    )
}

export default Tags