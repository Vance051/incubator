import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {/*<button onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}>COLLAPSED*/}
            {/*</button>*/}
            {collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}