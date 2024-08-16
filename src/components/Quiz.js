import React from "react"
import Question from "./Question"

export default function Quiz({questions, restart}) {
    const [correctAnswers, setCorrectAnswers] = React.useState("")
    const [showAnswers, setShowAnswers] = React.useState(false)

    const questionElements = questions.map((question) => {
        return <Question
            key={question.questionId}
            question={question.question}
            value={question.value}
            selectedIndex={question.selectedIndex}
            correctIndex={question.correctIndex}
            showAnswer={showAnswers}
            optionClicked={question.optionClicked}
        />
    })

    function checkAnswers() {
        if (showAnswers) {
            setCorrectAnswers("")
            setShowAnswers(false)
            restart()
            return
        }

        let correctAnswers = 0
        questions.forEach(question => {
            if (question.selectedIndex === question.correctIndex)
                correctAnswers++
        })
        setCorrectAnswers(`${correctAnswers}/${questions.length}`)
        setShowAnswers(true);
    }
    
    return (<div className="quiz">
        <div className="quiz--questions">
            {questionElements}
        </div>
        <hr className="quiz--divider"/>
        <div className="quiz--footer">
            { showAnswers && <h3 className="quiz--result">You scored {correctAnswers} correct answers</h3> }
            <button className="quiz--check" onClick={checkAnswers}>{showAnswers ? "Play again" : "Check answers"}</button>
        </div>
    </div>)
}