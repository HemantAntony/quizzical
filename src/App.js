import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {
  const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [isError, setIsError] = React.useState(false)

  function fetchQuestions() {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(res => {
      if (res.status === 429) {
        setIsError(true)
      }
      return res.json()
    })
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
  }

  React.useEffect(fetchQuestions, [])

  let message
  if (isError) {
    message = <h2 className="quiz--message">There were too many API requests.<br></br>Wait a few seconds and then reload :(</h2>
  } else if (!isError) {
    message = <h2 className="quiz--message">Loading...</h2>
  }
  
  return (
    <div className="App">
      { questions.length === 0 && message }
      { questions.length !== 0 && start && <Start startQuiz={() => setStart(false)} /> }
      { questions.length !== 0 && !start && <Quiz questions={questions} restart={() => fetchQuestions() }/> }
    </div>
  );
}

export default App;
