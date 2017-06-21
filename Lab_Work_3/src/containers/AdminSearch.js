import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router-dom";

export default class AdminSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            path: ''
        }
    }

    handleChange = (e) => {
        this.setState({path: e.target.value});
    };


    render() {
        return (

            <div className='searchField'>
                <form >
                    <input className='searchInput' type='text' value={this.state.path}
                           placeholder='Введите поискововой запрос через пробелы...' onChange={this.handleChange}/>
                    <Link to={`/admin/[ ${this.state.path} ]`}>
                        <RaisedButton primary={true} label='Поиск' id='searchButton'/>
                    </Link>
                </form>
            </div>


        );
    }
};



