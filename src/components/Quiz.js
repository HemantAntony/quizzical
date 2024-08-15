import React from "react"
import Question from "./Question"

export default function Quiz() {
    const [questions, setQuestions] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState("")
    const [showAnswers, setShowAnswers] = React.useState(false)

    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then(res => res.json())
        .then(data => {
            if (!data || !data.results) {
                return
            }

            setQuestions(data.results.map((question, index) => {
                return {
                    questionId: index,
                    question: question.question,
                    value:[...question.incorrect_answers, question.correct_answer],
                    correctIndex: 3,
                    selectedIndex: -1,
                    optionClicked: (optionIndex) => {
                        setQuestions(prevQuestions => prevQuestions.map(prevQuestion => {
                            return prevQuestion.questionId === index ? {...prevQuestion, selectedIndex: optionIndex} : prevQuestion
                        }))
                    }
                }
            }))
        })
    }, [])

    const questionElements = questions.map((question) => {
        return <Question
            key={question.questionId}
            questionId={question.questionId}
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
            console.log("Going to reset")
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