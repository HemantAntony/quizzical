export default function Option({value, selected, optionClicked}) {
    return (<button className={`option ${selected ? "selected" : ""}`} onClick={optionClicked}>
        {value}
    </button>)
}