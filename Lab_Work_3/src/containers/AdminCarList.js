import {connect} from "react-redux";
import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import {Link} from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

const AdminCarList = ({carsData}) => {
    return (
        <div className="AdminCarListScreen">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn style={{width: 70}}>Picture</TableHeaderColumn>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Марка</TableHeaderColumn>
                        <TableHeaderColumn>Модель</TableHeaderColumn>
                        <TableHeaderColumn>Тип топлива</TableHeaderColumn>
                        <TableHeaderColumn>Пробег</TableHeaderColumn>
                        <TableHeaderColumn>Трансмиссия</TableHeaderColumn>
                        <TableHeaderColumn>Год выпуска</TableHeaderColumn>
                        <TableHeaderColumn>Цена</TableHeaderColumn>
                        <TableHeaderColumn>Объем</TableHeaderColumn>
                        <TableHeaderColumn style={{width: 100}}>Изменить</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {carsData.map(car =>
                        <TableRow key={car.id}>
                            <TableRowColumn style={{width: 70}}><img alt={car.picture} width="70" height="70"
                                                                     src={car.picture}/></TableRowColumn>
                            <TableRowColumn>{car.id}</TableRowColumn>
                            <TableRowColumn>{car.mark}</TableRowColumn>
                            <TableRowColumn>{car.model}</TableRowColumn>
                            <TableRowColumn>{car.fuelType}</TableRowColumn>
                            <TableRowColumn>{car.mileage}</TableRowColumn>
                            <TableRowColumn>{car.transmission}</TableRowColumn>
                            <TableRowColumn>{car.dateOfRelease}</TableRowColumn>
                            <TableRowColumn>${car.price}</TableRowColumn>
                            <TableRowColumn>{car.fuelAmmount}</TableRowColumn>
                            <TableRowColumn style={{width: 100}}><Link to={`/admin/changeCar/${car.id}`}><RaisedButton
                                style={{width: 100}} label="Изменить"/></Link></TableRowColumn>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
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

const AdminCarListForm = connect(
    mapStateToProps
)(AdminCarList);

export default AdminCarListForm