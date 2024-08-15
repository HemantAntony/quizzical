import React from "react"
import Question from "./Question"

export default function Quiz() {
    const [questions, setQuestions] = React.useState([])

    
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
                    showAnswer: false,
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
            showAnswer={question.showAnswer}
            optionClicked={question.optionClicked}
        />
    })

    function checkAnswers() {

    }
    
    return (<div className="quiz">
        <div className="quiz--questions">
            {questionElements}
        </div>
        <button className="quiz--check" onClick={checkAnswers}>Check answers</button>
    </div>)
}