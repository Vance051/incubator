import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    console.log('App render')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
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

function Accordion() {
    console.log('Accordion rendered')
    return (
        <div>
           <AccordionTitle/>
            <AccordionBody/>

        </div>
    )
}

function AppTitle() {
    return <>This is App component</>
}


function AccordionTitle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default App;
