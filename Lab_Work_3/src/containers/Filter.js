import React from "react";
import AutoComplete from "material-ui/AutoComplete";
import Slider from "material-ui/Slider";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.marks = JSON.parse(localStorage.getItem('carsMark')).map(e => e.mark);
        this.models = JSON.parse(localStorage.getItem('carsModels')).map(e => e.name);
    }

    state = {
        priceSlider: 100000,
        dateOfReleaseSlider: 1950,
        mileageSlider: 1000000
    }

    handlePriceSlider = (event, value) => {
        this.setState({priceSlider: value})
        this.props.filterInput.price = value;
    };

    handleDateOfReleaseSlider = (event, value) => {
        this.setState({dateOfReleaseSlider: value})
        this.props.filterInput.dateOfRelease = value;
    };

    handleMileageSlider = (event, value) => {
        this.setState({mileageSlider: value})
        this.props.filterInput.mileage = value;
    };

    render() {
        return (<div>
                <br/><span>Марка</span><br/>
                <AutoComplete id="filterMarks" filter={AutoComplete.caseInsensitiveFilter} openOnFocus={true}
                              dataSource={this.marks}
                              onUpdateInput={searchText => this.props.filterInput.mark = searchText}/>
                <br/> <span>Модель</span><br/>
                <AutoComplete id="filterModels" filter={AutoComplete.caseInsensitiveFilter} openOnFocus={true}
                              dataSource={this.models}
                              onUpdateInput={searchText => this.props.filterInput.model = searchText}/>
                <br/><span className="space">Цена</span>
                <span >{this.state.priceSlider}$</span>
                <br/>
                <Slider
                    min={0}
                    max={100000}
                    step={1000}
                    value={this.props.filterInput.price}
                    onChange={ this.handlePriceSlider}
                /><br/>
                <span>Тип топлива</span> <br/>
                <RadioButtonGroup name="fuel" defaultSelected=""
                                  onChange={(e, value) => this.props.filterInput.fuelType = value}>
                    <RadioButton
                        value=""
                        label="Любой"

                    />
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
                <br/><span className="space">Год Выпуска</span>
                <span >{this.state.dateOfReleaseSlider}г.</span>
                <br/>
                <Slider
                    min={1950}
                    max={2017}
                    step={1}
                    value={this.props.filterInput.dateOfRelease}
                    onChange={ this.handleDateOfReleaseSlider}
                /><br/>
                <span>Коробка передач</span><br/><br/>
                <RadioButtonGroup name="transmission" defaultSelected=""
                                  onChange={(e, value) => this.props.filterInput.transmission = value}>
                    <RadioButton
                        value=""
                        label="Любой"

                    />
                    <RadioButton
                        value="ручная"
                        label="Механика"

                    />
                    <RadioButton
                        value="автомат"
                        label="Автомат"

                    />
                </RadioButtonGroup>
                <br/>
                <span className="space">Пробег</span>
                <span >{this.state.mileageSlider}тыс.км.</span>
                <br/>
                <Slider
                    min={0}
                    max={1000000}
                    step={1000}
                    value={this.props.filterInput.mileage}
                    onChange={ this.handleMileageSlider}
                /><br/>
            </div>
        )
    }
}

