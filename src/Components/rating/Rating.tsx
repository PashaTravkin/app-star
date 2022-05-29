import {Star} from "../star/Star";
import React from "react";
type RatingPropsType = {
    value:0|1|2|3|4|5
}
export function Rating(props: RatingPropsType) {
    // console.log("star")
    if (props.value === 1) {
        return (
            <div>
                <Star value={true}/>
                <Star value={false}/>
                <Star value={false}/>
                <Star value={false}/>
                <Star value={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={false}/>
                <Star value={false}/>
                <Star value={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={false}/>
                <Star value={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={false}/>
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={true}/>
                <Star value={true}/>
            </div>
        )
    }
    return (
        <div>
            <Star value={false}/>
            <Star value={false}/>
            <Star value={false}/>
            <Star value={false}/>
            <Star value={false}/>
        </div>
    )
}