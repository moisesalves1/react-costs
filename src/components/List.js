import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item ano_lancamento={2022}/>
                <Item marca='RedBull'/>
                <Item marca='Williams' ano_lancamento={2020}/>
            </ul>
        </>
    )
}

export default List