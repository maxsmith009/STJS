import React from "react";
import {Link} from "react-router-dom";

function sortCars(obj) {

    obj.sort(function (obj1, obj2) {

        return obj2.clickAmmount - obj1.clickAmmount;

    });
    return obj;
}

function CardInfo(props) {
    return (
        <Link to={`/user/carId/${props.info.id}`}>
            <div className='mainScreenGrid' onClick={props.onClick}>
                <img className="gridPicture" src={props.info.picture} alt={props.info.mark}/>
                <br/>
                Марка:<span> {props.info.mark}</span>
                Модель:<span>{props.info.name}</span>
                <br/>
                Год выпуска:<span> {props.info.dateOfRelease}</span>
                <br/>
                Пробег:<span > {props.info.mileage}</span>
                <br/>
                <div className="priceField">
                    Цена: $ <span> {props.info.price}</span>
                </div>
            </div>
        </Link>
    );
}

class Grid extends React.Component {

    constructor() {
        super();
        let cars = JSON.parse(localStorage.cars);
        cars = sortCars(cars);
        cars = cars.slice(0, 25);
        this.cars = cars;
    }

    renderCard(i) {
        return (
            <CardInfo info={this.cars[i]}/>
        );
    }

    render() {
        const grid = this.cars.map((elem, i) =>
            <div key={i}>{this.renderCard(i)}</div>);
        return (
            <div>{grid}</div>
        );
    }
}

export {Grid, sortCars};
