import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/accordion/Accordion";
import {Rating} from "./Components/rating/Rating";
import {PageTitle} from "./Components/appTitle/PageTitle";
import {Map} from "./Components/Method_Map/Map";
import {Button} from "./Components/Button/Button";
import {Map1} from "./Components/Method_Filter/FilterMapUseState";
import {OnOf} from "./Components/OnOf/OnOf";
import {UncontrolledAccordion} from "./Components/accordion/UncontrolledAccordion";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

let money = [
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
]


const currentMoney = money.filter((filtredMoney, index) => {
    return (
        filtredMoney.banknots === "RUBLS"
    )
})


function App() {
    const aboutFriends = (subscriber: string, age: number, location: string) => {
        console.log(subscriber, age, location)
    }

    const buttonThree = () => {
        console.log("I'm a stupid BUTTON")
    }
    let [a, setA] = useState(0)
    const colBackHandler = () => {
        setA(++a)
        console.log(a)
    }
    let ZeroHandler = () => {
        setA(0)
        console.log(0)
    }

    return (
        <>
           {/*<PageTitle title={"This is App component"}/>*/}
           {/*<PageTitle title={"My friends"}/>*/}
           {/* Article1*/}
           {/* <Rating value={5}/>*/}
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            {/*<Accordion titleValue={"Users"} />*/}
            {/*<Accordion titleValue={"Users"} />*/}
            {/*Article2*/}
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <OnOf />
            <OnOf />
            <OnOf />

            {/*<Map topCars={topCars}/>*/}
            {/*<Button nameButton="clock me pleas Men" colBack={() => aboutFriends('Pasha', 37, 'Minsk')}/>*/}
            {/* <br/>*/}
            {/*<Button nameButton="clock me pleas Women" colBack={() => aboutFriends('Dasha', 29, 'Minsk')}/>*/}
            {/*<br/>*/}
            {/*<Button nameButton="Stupid BUTTON " colBack={buttonThree}/>*/}
            {/*<br/>*/}
            {/*<h2>{a}</h2>*/}
            {/*<Button nameButton="plus Number" colBack={colBackHandler}/>*/}
            {/*<br/>*/}
            {/*<Button nameButton="set Zero" colBack={ZeroHandler}/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<Map1 money={currentMoney}/>*/}
    </>
    );
}



export default App;
