import React, {useState} from 'react';
import s from './App.module.css';
import {Accordion} from "./Components/accordion/Accordion";
import {ControlledOnOf} from "./Components/OnOf/controlledOnOf";
import {ControlledRating, RatingValue} from "./Components/rating/СontrolledRating";

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


    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [ratingValue, setRatingValue] = useState<RatingValue>(1)
    let [onOf, setOnOf] = useState(true)



    let items = [
        {title: 'Pasha', value: 1},
        {title: 'Masha', value: 2},
        {title: 'Lera', value: 3},
        {title: 'Nikol', value: 4}
    ]

    let onClickToItem=(value:any)=>{
        alert(`this ID number is ${value}`)
    }


    return (
        <div className={s.wrapper}>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/* Article1*/}
            {/* <UnconrolledRating value={5}/>*/}
            {/* <UncontrolledAccordion titleValue={"Menu"} />*/}
            {/* <UncontrolledAccordion titleValue={"Users"} />*/}
            <Accordion items={items} titleValue={"Menu"}
                       onClickToItem={onClickToItem}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<Accordion titleValue={"Users"} collapsed = {accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />*/}
            {/*Article2*/}
            <ControlledRating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            {/*<ControlledRating ratingValue = {ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<ControlledRating ratingValue = {ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<ControlledRating ratingValue = {ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<ControlledRating ratingValue = {ratingValue} setRatingValue={setRatingValue}/>*/}
            <ControlledOnOf onOf={onOf} setOnOf={setOnOf}/>
            {/*<ControlledOnOf onOf ={onOf} setOnOf={setOnOf}/>*/}
            {/*<UncontrolledOnOf />*/}
            {/*<UncontrolledOnOf />*/}
            {/*<UncontrolledOnOf />*/}

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
        </div>
    );
}


export default App;
