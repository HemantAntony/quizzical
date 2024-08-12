import Option from "./Option"

export default function Quiz() {
    return (<div className="quiz">
        <h3>How would one say goodbye in Spanish?</h3>
        <Option id="quiz1" name="test" value="HTML"/>
        <Option id="quiz2" name="test" value="CSS"/>
        <Option id="quiz3" name="test" value="JavaScript"/>
        <Option id="quiz4" name="test" value="Java"/>
    </div>)
}