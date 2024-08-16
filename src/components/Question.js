import Option from "./Option"

export const OptionState = Object.freeze({
    Default:-1,
    Selected:0,
    Incorrect:1,
    Correct:2
})

export default function Question({questionId, question, value, selectedIndex, correctIndex, showAnswer, optionClicked}) {
    const values = value.map((option, index) => {
        var optionState = OptionState.Default

        if (selectedIndex === index) {
            optionState = OptionState.Selected
        }
        
        if (showAnswer && correctIndex === index) {
            optionState = OptionState.Correct
        } else if (showAnswer && selectedIndex === index) {
            optionState = OptionState.Incorrect
        }

        return <Option
            key={index}
            value={option}
            optionState={optionState}
            optionClicked={()=>{
                if (!showAnswer)
                    optionClicked(index)
            }}
        />
    })
    
    return (<div className="quiz--question--box">
        <h3 className="quiz--question">{question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "&")}</h3>
        {values}
        <hr className="quiz--divider"/>
    </div>)
}