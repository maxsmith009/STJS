import React from "react";
import {changeCar} from "../actions/index";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import {Link} from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import store from "../index";
import {orange500} from "material-ui/styles/colors";

export default class ChangeCarForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            id: this.props.car.id,
            mark: this.props.car.mark,
            name: this.props.car.name,
            price: this.props.car.price,
            fuelType: this.props.car.fuelType,
            dateOfRelease: this.props.car.dateOfRelease,
            picture: this.props.car.picture,
            fuelAmmount: this.props.car.fuelAmmount,
            transmission: this.props.car.transmission,
            mileage: this.props.car.mileage,
            clickAmmount: this.props.car.clickAmmount
        };
        this.styles = {
            color: orange500,
            borderColor: orange500,
        }
    }

    handleClick = () => {

        store.dispatch(changeCar(this.state));
        let a = this.props.cars.map(car =>
            car.id === this.state.id ? {
                ...car,
                mark: this.state.mark,
                model: this.state.model,
                price: this.state.price,
                picture: this.state.picture,
                fuelType: this.state.fuelType,
                dateOfRelease: this.state.dateOfRelease,
                fuelAmmount: this.state.fuelAmmount,
                mileage: this.state.mileage,
                transmission: this.state.transmission
            }
                : car
        );

        localStorage.setItem('cars', JSON.stringify(a));
        alert("Изменен");
    };

    handleMarkChange = (event) => {
        this.setState({
            mark: event.target.value
        })
    };

    handleModelChange = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    };
    handleYearChange = (event) => {
        this.setState({
            dateOfRelease: event.target.value
        })
    };

    handlePictureChange = (event) => {
        this.setState({
            picture: event.target.value
        })
    };

    handleFuelAmmountChange = (event) => {
        this.setState({
            fuelAmmount: event.target.value
        })
    };
    handlemileageChange = (event) => {
        this.setState({
            mileage: event.target.value
        })
    };

    render() {
        return (
            <div className='AddCarScreen'>
                <form>
                    <div>
                        <span>Марка</span><br/>
                        <TextField
                            id="mark"
                            fullWidth={true}
                            value={this.state.mark}
                            onChange={this.handleMarkChange}
                            floatingLabelStyle={this.styles}
                            underlineStyle={this.styles}
                            floatingLabelText="Введите марку"
                        />

                        <br/><span>Модель</span><br/>
                        <TextField
                            id="model"
                            fullWidth={true}
                            value={this.state.name}
                            onChange={this.handleModelChange}
                            floatingLabelText="Введите модель"
                            floatingLabelStyle={this.styles}
                            underlineStyle={this.styles}
                        />


                        <br/><span>Цена</span><br/>
                        <TextField
                            id="price"
                            type="number"
                            min={0}
                            fullWidth={true}
                            value={this.state.price}
                            onChange={this.handlePriceChange}
                            underlineStyle={this.styles}
                        />


                        <br/><span>Тип топлива</span><br/>
                        <RadioButtonGroup name="fuel" defaultSelected={this.state.fuelType} fullWidth={true}
                                          onChange={(e, value) => this.setState({fuelType: value})}>
                            <RadioButton
                                value="бензин"
                                label="Бензин"

                            />
                            <RadioButton
                                value="дизель"
                                label="Дизель"

                            />
                            <RadioButton
                                value="газ"
                                label="Газ"
                            />
                        </RadioButtonGroup>

                        <hr/>
                        <span>Год Выпуска</span><br/>
                        <TextField
                            id="year"
                            type="number"
                            fullWidth={true}
                            min={1950}
                            value={this.state.dateOfRelease}
                            onChange={this.handleYearChange}
                            floatingLabelText="Введите год выпуска"
                            floatingLabelStyle={this.styles}
                            underlineStyle={this.styles}
                        />

                        <br/><span>Коробка передач</span><br/>
                        <RadioButtonGroup name="transmission" defaultSelected={this.state.transmission} fullWidth={true}
                                          onChange={(e, value) => this.setState({transmission: value})}>

                            <RadioButton
                                value="ручная"
                                label="Механика"

                            />
                            <RadioButton
                                value="автомат"
                                label="Автомат"

                            />
                        </RadioButtonGroup>

                        <hr/>
                        <span>Пробег</span><br/>
                        <TextField
                            id="mileage"
                            type="number"
                            min={0}
                            fullWidth={true}
                            value={this.state.mileage}
                            onChange={this.handlemileageChange}
                            underlineStyle={this.styles}
                        />

                        <br/><span>Объем двигателя</span><br/>
                        <TextField
                            id="fuelAmmount"
                            type="number"
                            min={0}
                            fullWidth={true}
                            value={this.state.fuelAmmount}
                            onChange={this.handleFuelAmmountChange}
                            underlineStyle={this.styles}
                        />

                        <br/><span>Изображение</span><br/>
                        <TextField
                            id="picture"
                            fullWidth={true}
                            value={this.state.picture}
                            onChange={this.handlePictureChange}
                            floatingLabelText="Введите ссылку на изображение"
                            floatingLabelStyle={this.styles}
                            underlineStyle={this.styles}
                        />

                        <br/>
                        <Link to='/admin/[ ]'>
                            <RaisedButton fullWidth={true} onClick={this.handleClick} label="Изменить"/>

                            <RaisedButton fullWidth={true} label="Отмена"/>
                        </Link>
                    </div>
                </form>
            </div>)
    }
}