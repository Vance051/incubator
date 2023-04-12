import React from 'react';
import './App.css';
import {Rating} from "./Components/Rating/Rating";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log('App render')
    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article1
            {/*<Accordion titleValue={'Bayan'} collapsed={true}/>*/}
            {/*<Accordion titleValue={"bang-bamg"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={'No-controll'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return <h1>{props.title}</h1>
}


export default App;
