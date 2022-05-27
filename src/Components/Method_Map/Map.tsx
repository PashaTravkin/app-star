import React from 'react';
import classes from './Map.module.css'

type ItemTopCarsPropsType = {
    manufacturer: string,
    model: string
}
type TopCarsPropsTyp = {
    topCars: Array<ItemTopCarsPropsType>
}

export let Map = (props: TopCarsPropsTyp) => {
    return (
        <div className={classes.strike}>

            {props.topCars.map((itemTopCars, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{itemTopCars.manufacturer}</td>
                        <td>{itemTopCars.model}</td>
                    </tr>
                )
            })}

        </div>
    )
}