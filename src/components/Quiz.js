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

            console.log(data.results.map((question, index) => {
                return <Question
                key={index}
                questionId={index}
                question={question.question}
                value={[...question.incorrect_answers, question.correct_answer]}
                />
            }))

            setQuestions(data.results.map((question, index) => {
                return <Question
                key={index}
                questionId={index}
                question={question.question}
                value={[...question.incorrect_answers, question.correct_answer]}
                />
            }))
        })
    }, [])
    
    return (<div className="quiz">
        <div className="quiz--questions">
            {questions}
        </div>
        <button className="quiz--check">Check answers</button>
    </div>)
}