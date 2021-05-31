import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating, RatingValueType} from './components/Rating';
import UncontrolledOnOff from './components/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating';
import OnOff from './components/OnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="app">
            <PageTitle title={'This is APP component'}/>
            <UncontrolledAccordion titleValue={'Uncontrolled'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'Controlled'} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
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
