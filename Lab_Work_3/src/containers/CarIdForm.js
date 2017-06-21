import React from "react";
import ImageRemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import {red500} from "material-ui/styles/colors";
import ContentArchive from "material-ui/svg-icons/content/archive";

const CarIdForm = (car) => {

    const iconStyles = {
        marginLeft: 100,
        marginRight: 7
    };

    const iconStyle = {
        marginRight: 7
    };

    return (<div className='carView'>
        <div className="carViewPicture">
            <img alt={car.picture} className="carViewPicture" src={car.picture}/>
        </div>

        <h1><span >{car.mark}</span>
            <span> </span>
            <span >{car.name}</span></h1>
        <div className="idAndViews">
            <ContentArchive style={iconStyle} color={red500}/>
            <span>{car.id}</span>
            <ImageRemoveRedEye style={iconStyles} color={red500}/>
            <span>{car.clickAmmount}</span>
        </div>
        <br/>
        <div className="carVievTable">

            <table>
                <tbody>
                <tr>
                    <td>Год выпуска:</td>
                    <td><span>{car.dateOfRelease}</span> г.</td>
                </tr>
                <tr>
                    <td>Пробег:</td>
                    <td><span>{car.mileage}</span> тыс. км.</td>
                </tr>
                <tr>
                    <td>Тип топлива:</td>
                    <td><span>{car.fuelType}</span></td>
                </tr>
                <tr>
                    <td>Коробка передач:</td>
                    <td><span>{car.transmission}</span></td>
                </tr>
                <tr>
                    <td>Объем двигателя:</td>
                    <td><span >{car.fuelAmmount}</span> куб. см.</td>
                </tr>

                </tbody>
            </table>

        </div>
        <br/>
        <div className="carViewPrice">
            <h2> Цена: $<span >{car.price}</span></h2>
        </div>

    </div>)
};

export default CarIdForm;