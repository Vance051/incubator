import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";

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




function AppTitle() {
    return <>This is App component</>
}



export default App;
