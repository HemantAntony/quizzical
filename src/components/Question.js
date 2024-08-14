import Option from "./Option"

export default function Question({questionId, question, value, selectedIndex}) {

    const values = value.forEach((option, index) => {
        return <Option key={index} value={option} selected={index === selectedIndex}/>
    })
    
    return (<div>
        <h3 className="quiz--question">{question}</h3>
        {values}
        <hr className="quiz--divider"/>
    </div>)
}