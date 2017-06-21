import React from "react";
import {connect} from "react-redux";
import {resetFilterInput, setFilterInput} from "../actions/index";
import RaisedButton from "material-ui/RaisedButton";
import Filter from "./Filter";

let FilterForm = ({dispatch}) => {

    let filterInput = {
        mark: "",
        model: "",
        price: 100000,
        fuelType: "",
        dateOfRelease: 1950,
        mileage: 1000000,
        transmission: ""
    };

    let handleClick = () => {
        dispatch(setFilterInput(filterInput));
    };

    let Reset = () => {
        dispatch(resetFilterInput());
    };

    return (
        <div className="filterForm">
            <div className="insideFilter">
                <Filter filterInput={filterInput}/>
                <RaisedButton primary={true} onClick={handleClick} label="Отфильтровать"/>
                <span className="space"/>
                <RaisedButton onClick={Reset} label="Reset"/>
            </div>
        </div>
    )
};

FilterForm = connect()(FilterForm);


export default FilterForm