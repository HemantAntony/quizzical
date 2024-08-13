import Option from "./Option"

export default function Question({questionId, question, value, selectedIndex}) {

    const values = value.map((option, index) => {
        return <Option value={option} selected={index === selectedIndex}/>
    })
    
    return (<div>
        <h3 className="quiz--question">{question}</h3>
        {values}
        {/* <Option value={value[0]} selected={true}/>
        <Option value={value[1]}/>
        <Option value={value[2]}/>
        <Option value={value[3]}/> */}
        <hr className="quiz--divider"/>
    </div>)
}