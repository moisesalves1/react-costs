function Pessoa (props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome}></img>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa