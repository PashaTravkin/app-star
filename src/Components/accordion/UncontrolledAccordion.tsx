import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}
type AccordionTitlePropsType = {
    title: string,
    setToggle: () => void
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    const setToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle setToggle={setToggle} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setToggle}>---{props.title}---</h3>
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