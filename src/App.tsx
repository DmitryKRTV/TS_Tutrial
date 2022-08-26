import React, {useState} from "react";
import './App.css';
import Accordion, {itemsExample, PageTitle} from "./components/Accordion/Accordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UseEffectDemo} from "./stories/useEffect/UseEffect.stories";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [onOffValue, setOnOffValue] = useState<boolean>(false);

    return (
        <div className="App">
            <header className="App-header">
                <OnOff on={onOffValue} onChange={setOnOffValue}/>
                <UncontrolledOnOff onChange={setOnOffValue}/>

                <UncontrolledAccordion titleValue={"Menu"}/>
                <UncontrolledRating/>

                <Rating value={ratingValue} onClick={setRatingValue}/>
                <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed} items={itemsExample} onClick={()=>{}}/>
                <UseEffectDemo/>
            </header>
        </div>
    );
}

export default App;



