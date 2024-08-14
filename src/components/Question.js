import Option from "./Option"

export default function Question({questionId, question, value, selectedIndex}) {

    const values = value.map((option, index) => {
        return <Option key={index} value={option} selected={index === selectedIndex}/>
    })

    console.log(values)

    
    return (<div>
        <h3 className="quiz--question">{question}</h3>
        {values}
        <hr className="quiz--divider"/>
    </div>)
}