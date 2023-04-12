import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";

function App() {
    console.log('App render')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article1
            {/*<Accordion titleValue={'Bayan'} collapsed={true}/>*/}
            {/*<Accordion titleValue={"bang-bamg"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={'No-controll'} collapsed={false}/>
            <UncontrolledRating value={1}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

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
