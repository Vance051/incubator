import React, {FC} from 'react';

type OnOffType = {
    on: boolean
    setOn:(on:boolean)=>void
}
export const OnOff:FC<OnOffType> = (props) => {
    console.log('on' + props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' :'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'white' :'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' :'white'
    }

    return (

        <div>
<div style={onStyle} onClick={()=>{props.setOn(true)}}></div>
<div style={offStyle} onClick={()=>{props.setOn(false)}}></div>
<div style={indicatorStyle}></div>
        </div>
    );
};

