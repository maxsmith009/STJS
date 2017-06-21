import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {CarMainScreen} from "./components/UserMainPage";
import CarList from "./components/UserCarListScreen";
import {CarIdScreen} from "./components/CarIdScreen";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers";
import {addCar} from "./actions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import history from "./components/history";
import {AddCarScreen} from './containers/AdminAddCarScreen';
import  {ChangeCarScreen} from './containers/AdminChangeCarScreen'
import AdminCarList from './components/AdminMainPage'

injectTapEventPlugin();

const store = createStore(reducer);

let cars = JSON.parse(localStorage.cars);
cars.forEach(e => {
    store.dispatch(addCar(e));
});

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
            <MuiThemeProvider>
                <div>
                    <Switch>
                        <Redirect exact from='/' to='/user'/>
                        <Route exact path='/user' component={CarMainScreen}/>
                    </Switch>
                    <Route exact path='/user/search/:searchText' component={CarList}/>
                    <Route exact path='/user/carId/:carid' component={CarIdScreen}/>
                    <Route exact path='/admin/:searchText' component={AdminCarList}/>
                    <Route exact path='/admin/addCar/NewCar' component={AddCarScreen}/>
                    <Route exact path='/admin/changeCar/:carid' component={ChangeCarScreen}/>
                </div>
            </MuiThemeProvider>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root'));

export default store