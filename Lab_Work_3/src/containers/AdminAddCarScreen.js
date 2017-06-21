import React from "react";
import {addCar} from "../actions/index";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import {Link} from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import store from "../index";
import {orange500} from "material-ui/styles/colors";


class AddCarScreen extends React.Component {

    constructor() {
        super();
        this.cars = JSON.parse(localStorage.cars);

        this.state = {
            id: this.cars[this.cars.length - 1].id + 1,
            mark: '',
            name: '',
            price: 0,
            fuelType: 'бензин',
            dateOfRelease: 1950,
            picture: '',
            fuelAmmount: 0,
            transmission: '',
            mileage: 0,
            clickAmmount: 0
        };
        this.styles = {
            color: orange500,
            borderColor: orange500,
        }
    }

    handleClick = () => {
        store.dispatch(addCar(this.state));
        this.cars.push(this.state);
        localStorage.setItem('cars', JSON.stringify(this.cars));
        alert("Добавлен");
    }

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
                        <RadioButtonGroup name="fuel" defaultSelected="бензин" fullWidth={true}
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
                            underlineStyle={this.styles}
                        />

                        <br/><span>Коробка передач</span><br/>
                        <RadioButtonGroup name="transmission" defaultSelected="ручная" fullWidth={true}
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
                            <RaisedButton primary={true} fullWidth={true} onClick={this.handleClick} label="Добавить"/>

                            <RaisedButton secondary={true} fullWidth={true} label="Отмена"/>
                        </Link>
                    </div>
                </form>
            </div>)
    }
}

export {AddCarScreen};
