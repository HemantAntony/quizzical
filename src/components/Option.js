export default function Option({value, selected}) {
    return (<button className={`option ${selected ? "selected" : ""}`}>{value}</button>)
}