import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}
type AccordionTitlePropsType = {
    title: string,
    setCollapsed: (value:boolean) => void
    collapsed:boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle setCollapsed={setCollapsed} title={props.titleValue} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>---{props.title}---</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}