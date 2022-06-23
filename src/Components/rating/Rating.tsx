import {Star} from "../star/Star";
import React, {useState} from "react";

export type RatingPropsType = {}

export function Rating(props: RatingPropsType) {

    const [value, setValue] = useState(1)

    return (
        <div>
            {/*<Star  selected={value>0}/><button onClick={()=> toggleValue(1)} ></button>*/}
            {/*<Star selected={value>1}/><button onClick={()=> toggleValue(2)} ></button>*/}
            {/*<Star selected={value>2}/><button onClick={()=> toggleValue(3)} ></button>*/}
            {/*<Star selected={value>3}/><button onClick={()=> toggleValue(4)} ></button>*/}
            {/*<Star selected={value>4}/><button onClick={()=> toggleValue(5)} ></button>*/}
            <Star selected={value > 0} setValue={()=>setValue(1)}/>
            <Star selected={value > 1} setValue={()=>setValue(2)}/>
            <Star selected={value > 2} setValue={()=>setValue(3)}/>
            <Star selected={value > 3} setValue={()=>setValue(4)}/>
            <Star selected={value > 4} setValue={()=>setValue(5)}/>
        </div>
    )
}
