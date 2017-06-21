import {combineReducers} from "redux";
import carsData from "./cars";
import filterInputs from "./filterInputs";
import searchTextInput from "./searchTextInput";

const CarApp = combineReducers({
    carsData,
    filterInputs,
    searchTextInput
});

export default CarApp