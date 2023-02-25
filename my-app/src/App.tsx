import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    console.log('App render')
    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article1
            <Rating value={3}/>
            <Accordion title={'Bayan'}/>
            <Accordion title={"bang-bamg"}/>
            Article2
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


function PageTitle(props: any) {

    return <h1>{props.title}</h1>
}


export default App;
