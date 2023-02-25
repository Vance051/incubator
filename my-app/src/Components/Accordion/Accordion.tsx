import React from "react";

export function Accordion() {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>
    ) }

function AccordionTitle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}