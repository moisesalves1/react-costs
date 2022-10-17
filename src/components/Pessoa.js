function Pessoa ({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt={nome}></img>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa