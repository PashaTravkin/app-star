import React from "react";
type StarProps = {
    value: boolean
}
export function Star(props: StarProps) {
    if (props.value === true) {
        return (
            <>
                <b>STAR </b>
            </>
        )
    } else {
        return <>STAR </>
    }
}