export default function Option({id, name, value, selected}) {
    return (<button className={`option ${selected ? "selected" : ""}`}>Adios</button>)
}