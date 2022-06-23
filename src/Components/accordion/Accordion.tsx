import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setAccordionCollapsed:(value:boolean)=>void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle  setAccordionCollapsed ={()=>props.setAccordionCollapsed(!props.collapsed)} title={props.titleValue} />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setAccordionCollapsed}>---{props.title}---</h3>
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