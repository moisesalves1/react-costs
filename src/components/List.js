import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item name='Moises'/>
                <Item name='Maria Eduarda'/>
                <Item name='Maria Julia'/>
            </ul>
        </>
    )
}

export default List