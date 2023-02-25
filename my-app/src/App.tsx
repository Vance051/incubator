import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

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




function AppTitle() {
    return <>This is App component</>
}



export default App;
