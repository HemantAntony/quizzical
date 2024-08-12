import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {
  const [start, setStart] = React.useState(false)
  
  return (
    <div className="App">
      { start && <Start startQuiz={() => setStart(false)} /> }
      { !start && <Quiz /> }
    </div>
  );
}

export default App;
