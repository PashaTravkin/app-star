import React from "react";
import './FilterMapUseState.css'

type itemManyType = {
    banknots: string,
    value: number,
    number: string
}

type manyType = {
    money: Array<itemManyType>
}

export const Map1 = (props: manyType) => {
    return (
        <ul>
            {props.money.map((money, index) => {
                return (
                    <span key={index}>
                        <li>{money.banknots}</li>
                        <li>{money.value}</li>
                        <li>{money.number}</li>
                        <br/>
                    </span>)
            })}

        </ul>
    )
}