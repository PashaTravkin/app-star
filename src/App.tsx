import React from 'react';
import './App.css';
import {Accordion} from "./Components/accordion/Accordion";
import {Rating} from "./Components/rating/Rating";
import {PageTitle} from "./Components/appTitle/PageTitle";
import {Map} from "./Components/Method_Map/Map";
import {Button} from "./Components/Button/Button";
import {log} from "util";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    const aboutFriends =(subscriber:string, age:number, location:string)=>{
        console.log(subscriber, age, location)
    }

    const buttonThree =()=>{
        console.log("I'm a stupid BUTTON")
    }


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
            <Button nameButton = "clock me pleas Men" colBack={()=>aboutFriends('Pasha', 37, 'Minsk')}/>
             <br/>
            <Button nameButton = "clock me pleas Women" colBack={()=>aboutFriends('Dasha', 29, 'Minsk')}/>
            <br/>
            <Button nameButton = "Stupid BUTTON " colBack={buttonThree}/>

    </span>
    );
}


export default App;
