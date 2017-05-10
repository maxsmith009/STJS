var createCarsList = function(form, text) {
    $('#searchText').val(text);
    var textArray = text.trim().split(/\s+/);
    var cars = JSON.parse(localStorage.cars);
    cars = sortCars(cars);
    cars = selectNeededCar(textArray, cars);
    createFilter(form, cars);
    form.append('<ul id="carList"></ul>');
    var ul = $('#carList');
    for (var i = 0; i < cars.length; i++) {
        ul.append(loadCarInfo(cars[i]));
    }
};

var selectNeededCar = function(searchText, carsList) {

    if (searchText[0] === "") {

        return carsList;
    } else {
        var newCarList = [];
        for (var i = 0; i < carsList.length; i++) {
            var ammountOfSimilars = 0;
            for (var j = 0; j < searchText.length; j++) {
                for (var key in carsList[i]) {
                    if (carsList[i][key] === searchText[j]) {
                        ammountOfSimilars++;
                        break;
                    }
                }

            }
            if (ammountOfSimilars === searchText.length)
                newCarList.push(carsList[i]);
        }
        return newCarList;
    }
};

var loadCarInfo = function(car) {

    var carView = '<li class="list" onclick="SwitchToCarIDPage(' + car.id + ')">';
    carView += '<div>';
    carView += '<div class="info">';
    carView += '<img src="' + car.picture + '" width="200"  height="170" align="left">';
    carView += '</div>';
    carView += '<div>';
    carView += "<p>" + car.mark + " " + car.name + "</p>";
    carView += "Состояние: " + car.condition;
    carView += "<br>";
    carView += "Год выпуска: " + car.dateOfRelease + "г.";
    carView += "<br>";
    carView += "Пробег: " + car.mileage + " км";
    carView += "<br>";
    carView += "Тип топлива: " + car.fuelType;
    carView += "<br>";
    carView += "Объем двигателя: " + car.fuelAmmount + " куб.см.";
    carView += "<br>";
    carView += "Коробка передач: " + car.transmission;
    carView += '</div>';
    carView += '<div class="price">';
    carView += "Цена: " + car.price;
    carView += '</div>';
    carView += '</div>';
    carView += '</li>';
    return carView;
};