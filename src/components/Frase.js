import styles from './Frase.module.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Meu Primeiro Componente</p>
        </div>
    )
}

export default Frase