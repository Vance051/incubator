import React from "react";

export function Rating() {
    console.log('Rating rendered')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log('star rendered')
    return (
        <div>
            <div>star</div>
        </div>
    )
}