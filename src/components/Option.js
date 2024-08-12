export default function Option({id, name, value}) {
    return (<div className="option">
        <input type="radio" id={id} name={name} value={value} />
        <label for={id}>{value}</label>
    </div>)
}