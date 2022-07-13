import React from "react";

type ItemsPropsType = {
    title: string
    value: any

}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setAccordionCollapsed:(value:boolean)=>void
    items:ItemsPropsType[]
    onClickToItem:(value: any)=>void


}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle  setAccordionCollapsed ={()=>props.setAccordionCollapsed(!props.collapsed)} title={props.titleValue} />
            {!props.collapsed && <AccordionBody  onClickToItem={props.onClickToItem} items = {props.items}/>}
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

type AccordionBody = {
    items:ItemsPropsType[]
    onClickToItem:(value: any)=>void
}

function AccordionBody(props:AccordionBody) {


    return (
        <ul>
            {props.items.map((i, index)=><li onClick={()=>props.onClickToItem(i.value)} key={index}>{i.title}</li>
            )}
        </ul>
    )
}