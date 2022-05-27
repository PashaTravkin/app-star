import React from 'react';

type itemTopCarsType = {
    manufacturer: string,
    model: string
}

type TopCarsType = {
    topCars: Array<itemTopCarsType>
}

export const Map1 = (props: TopCarsType) => {
    return (
        <ul>
            {
                props.topCars.map((value, index) => {
                    return (
                        <div>
                            <span>
                            <li>{index + 1}</li>
                            <li>{value.model}</li>
                            <li>{value.manufacturer}</li>
                            </span>
                            <br/>
                        </div>
                    )
                })
            }

        </ul>
    )
}