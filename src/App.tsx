import React from 'react';
import './App.css';
import {Accordion} from "./Components/accordion/Accordion";
import {Rating} from "./Components/rating/Rating";
import {PageTitle} from "./Components/appTitle/PageTitle";
import {Map1} from "./Components/Method_Map/Map1";
import {Map} from "./Components/Method_Map/Map";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {

    return (
        <span>
           <PageTitle title={"This is App component"}/>
           <PageTitle title={"My friends"}/>
            Article1
            <Rating value={5}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Map topCars={topCars}/>
            <Map1 topCars={topCars}/>
    </span>
    );
}

export default App;
