import React from "react";
import AdminCarListForm from "../containers/AdminCarList";
import FilterForm from "../containers/FilterForm";
import AdminSearch from "../containers/AdminSearch";
import {addSearchText} from "../actions/index";
import {connect} from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router-dom";
import store from "../index";

class AdminCarList extends React.Component {

    componentDidUpdate() {
        store.dispatch(addSearchText(this.props.match.params.searchText));
    }

    render() {
        return (
            <div className="carListWithFilter">
                <Link to={`/admin/addCar/NewCar`}>
                    <RaisedButton fullWidth={true} secondary={true} label="Добавить"/>
                </Link>
                <AdminSearch/>

                <FilterForm/>
                <AdminCarListForm/>

            </div>
        );
    };
}
AdminCarList = connect()(AdminCarList);

export default AdminCarList