import React from "react";

type buttonType ={
    nameButton:string,
    colBack:()=>void
}

export const Button = (props:buttonType) => {
const onClickHandler = ()=>{
    props.colBack()
}
    return (
        <button onClick={onClickHandler}>{props.nameButton}</button>
    )
}