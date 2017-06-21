import {connect} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";

const carListView = (car) => {
    return (
        <Link to={`/user/carId/${car.id}`}>
            <div className="list">

                <div className="carImage">
                    <img alt={car.picture} width="290" height="180" src={car.picture}/>
                </div>
                <div>
                    Марка: {car.mark}
                    Модель: {car.model}
                    <br/>
                    Год выпуска: {car.dateOfRelease}
                    <br/>
                    Пробег: {car.mileage}
                    <br/>
                    Тип топлива: {car.fuelType}
                    <br/>
                    Коробка передач: {car.transmission}
                    <br/>
                    Объем двигателя: {car.fuelAmmount} куб. см.

                </div>
                <div className="carListPrice">
                    Цена: ${car.price}
                </div>
            </div>
        </Link>)
};

const CarList = ({carsData}) => {
    return (
        <div className="CarListScreen">

            {carsData.map(car =>
                <div key={car.id}>
                    {carListView(car)}
                </div>
            )}

        </div>)
};

const getSuitCars = (carsData, filterInputs, searchTextInput) => {

    let searchText = searchTextInput.trim().split(/\s+/);
    searchText.splice(0, 1);
    searchText.splice(-1, 1);

    return carsData.filter(car => {
        let flag = false;
        if (!searchText.length) {
            flag = true
        }
        else
            for (let i = 0; i < searchText.length; i++) {
                if (car.mark.toLowerCase().indexOf(searchText[i].toLowerCase()) !== -1 ||
                    car.model.toLowerCase().indexOf(searchText[i].toLowerCase()) !== -1 ||
                    car.fuelType.toLowerCase().indexOf(searchText[i].toLowerCase()) !== -1 ||
                    car.transmission.toLowerCase().indexOf(searchText[i].toLowerCase()) !== -1) {
                    flag = true;
                }
            }
        if (flag) {

            return !((car.mark.toLowerCase().indexOf(filterInputs.mark.toLowerCase()) === -1) ||
                (car.model.toLowerCase().indexOf(filterInputs.model.toLowerCase()) === -1) ||
                (car.price > filterInputs.price) ||
                (car.fuelType.toLowerCase().indexOf(filterInputs.fuelType.toLowerCase()) === -1) ||
                (car.transmission.toLowerCase().indexOf(filterInputs.transmission.toLowerCase()) === -1) ||
                (car.dateOfRelease < filterInputs.dateOfRelease) ||
                (car.mileage > filterInputs.mileage)
            )
        }
        else
            return false;


    })

};

const mapStateToProps = (state) => ({
    carsData: getSuitCars(state.carsData, state.filterInputs, state.searchTextInput)
});

const carListForm = connect(
    mapStateToProps
)(CarList);

export default carListForm
