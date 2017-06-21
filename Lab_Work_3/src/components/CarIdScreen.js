import React from "react";
import CarIdForm from "../containers/CarIdForm";

const CarIdScreen = ({match}) => {

    let cars = JSON.parse(localStorage.cars);
    let car = cars.filter((e) => {
        if (e.id === Number(match.params.carid)) {
            e.clickAmmount++;
            localStorage.setItem('cars', JSON.stringify(cars));
            return true;
        }
        else return false;
    })[0];

    if (car)
        return CarIdForm(car);
    else
        return (<div className='carView'>
            <h1>Такого автомобиля в базе данных нет!!!(((</h1>
            <br/>
            <img alt="alt" src='http://bumper-stickers.ru/30160-thickbox_default/grustnyy-smaylik.jpg'/>
        </div>)
};

export {CarIdScreen};

