import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    console.log('App render')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [collapsed, setCollapsed] = useState(false)
    let [on, setOn] = useState(false)
    return (
        <div className="App">
            <OnOff on={on} onChange={setOn}/> {on.toString()}
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article1
            {/*<Accordion titleValue={'Bayan'} collapsed={true}/>*/}
            {/*<Accordion titleValue={"bang-bamg"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={'No-controll'} collapsed={false}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>
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
