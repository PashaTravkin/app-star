import React, {useState} from "react";

type starProps = {
    selected: boolean,
    setValue:()=>void
}
    
export function Star(props: starProps) {


    return (
        <>
            <span onClick={props.setValue}>{props.selected?<b>  STAR</b>:'  STAR'}</span>
        </>
    )
}