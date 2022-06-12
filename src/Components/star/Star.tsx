import React, {useState} from "react";

type starProps = {
    selected: boolean,
    toggleValue: (value: number) => void,
    current:number

}

export function Star(props: starProps) {


    return (
        <>
            {props.selected ? <b onClick={() => props.toggleValue(props.current)} >STAR </b> :
                <span onClick={() => props.toggleValue(props.current)}>STAR </span>}

        </>
    )
}