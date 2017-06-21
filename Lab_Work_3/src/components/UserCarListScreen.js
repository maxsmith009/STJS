import React from "react";
import CarListForm from "../containers/UserCarListForm";
import FilterForm from "../containers/FilterForm";
import Search from "../containers/UserSearch";
import {addSearchText} from "../actions/index";
import {connect} from "react-redux";
import store from "../index";

class CarList extends React.Component {

    componentDidUpdate() {
        store.dispatch(addSearchText(this.props.match.params.searchText));
    }

    componentDidMount() {
        store.dispatch(addSearchText(this.props.match.params.searchText));
    }

    render() {
        return (
            <div className="carListWithFilter">
                <Search/>
                <FilterForm/>
                <CarListForm/>

            </div>
        );
    };
}

CarList = connect()(CarList);

export default CarList