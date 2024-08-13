import Question from "./Question"

export default function Quiz() {
    return (<div className="quiz">
        <Question questionId={0} question={"How would one say goodbye in Spanish?"} value={["HTML", "CSS", "JavaScript", "Java"]} selectedIndex={1}/>
        {/* <Question /> */}
        {/* <Question /> */}
        {/* <Question /> */}
        <button className="quiz--check">Check answers</button>
    </div>)
}