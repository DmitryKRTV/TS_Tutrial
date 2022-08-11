import React, {useState} from "react";
import './App.css';
import Accordion, {PageTitle} from "./components/Accordion";
import UncontrolledRating from "./components/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import OnOff from "./components/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff";

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
                <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>
            </header>
        </div>
    );
}

export default App;



