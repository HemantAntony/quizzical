import { OptionState } from "./Question"

export default function Option({value, optionState, optionClicked}) {
    let state = ""
    if (optionState === OptionState.Selected) {
        state = "selected"
    } else if (optionState === OptionState.Correct) {
        state = "correct"
    } else if (optionState === OptionState.Incorrect) {
        state = "incorrect"
    }
    return (<button className={`option ${state}`} onClick={optionClicked}>
        {value.replace(/&quot;/g, '"')}
    </button>)
}