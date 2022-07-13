
import React, {useState} from "react";

export type RatingValue = 0|1|2|3|4|5

export type RatingPropsType = {
    ratingValue:RatingValue
    setRatingValue:(value:RatingValue)=>void
}

export function ControlledRating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.ratingValue > 0} setRatingValue={()=>props.setRatingValue(1)}/>
            <Star selected={props.ratingValue > 1} setRatingValue={()=>props.setRatingValue(2)}/>
            <Star selected={props.ratingValue > 2} setRatingValue={()=>props.setRatingValue(3)}/>
            <Star selected={props.ratingValue > 3} setRatingValue={()=>props.setRatingValue(4)}/>
            <Star selected={props.ratingValue > 4} setRatingValue={()=>props.setRatingValue(5)}/>
        </div>
    )
}

type starProps = {
    selected: boolean,
    setRatingValue:()=>void
}

function Star (props: starProps) {


    return (
        <>
            <span onClick={props.setRatingValue}>{props.selected?<b>  STAR</b>:'  STAR'}</span>
        </>
    )
}
