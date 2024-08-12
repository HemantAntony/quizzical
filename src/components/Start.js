export default function Start({startQuiz}) {
    return (<div className="start">
        <h1 className="start--title">Quizzical</h1>
        <h2 className="start--description">A quiz game</h2>
        <button onClick={startQuiz} className="start--button">Start quiz</button>
    </div>)
}