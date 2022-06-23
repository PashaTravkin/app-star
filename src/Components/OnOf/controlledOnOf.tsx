import React, {useState} from "react";
// type propsType ={
//     on:boolean
// }

export const UncontrolledOnOf = () => {

    const [onOf, setOnOf] = useState(true)

    let onClickHandler = (value:boolean)=>{
        setOnOf(value)
    }

    const wrapper = {
        margin: '10px',
    }
    const onStyle = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        marginRight: '2px',
        width:'30px',
        height:'20px',
        background: onOf?'green':'',
    }
    const ofStyle = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        marginRight: '10px',
        width:'30px',
        height:'20px',
        background: !onOf?'red':'',
    }

    const indicatorStyle = {
        display: 'inline-block',
        width:'10px',
        height:'10px',
        borderRadius: '10px',
        border: '1px solid black',
        marginTop:'10px',
        background: !onOf?'red':'green',
    }
    return (
        <div style={wrapper}>
            <div style={onStyle} onClick={()=>onClickHandler(true)} >On</div>
            <div style={ofStyle} onClick={()=>onClickHandler(false)} >Of</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}