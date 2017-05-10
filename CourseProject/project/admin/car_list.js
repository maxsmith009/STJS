var createCarList = function(form) {

    var cars = JSON.parse(localStorage.cars);
    cars = sortCars(cars);
    form.append("<input type='text' size='100' id='searchText' placeholder='Введите текст поиска...'>");
    form.append("<button type='button' id='searchButton'>Поиск</button>");
    form.append('<div id="tablePlace">');

    $('#searchButton').on('click', function() {

        var cars = JSON.parse(localStorage.cars);

        var textArray = $('#searchText').val().trim().split(/\s+/);

        cars = selectNeededCar(textArray, cars);

        placeForFilter.empty();
        $('#tablePlace').empty();

        createTable(cars);
    });
    placeForFilter.empty();
    createTable(cars)
};

var sortCars = function(obj) {

    obj.sort(function(obj1, obj2) {

        return obj1.id - obj2.id;

    });
    return obj;

};

var createTable = function(cars) {

    createFilter(form, cars);

    $('#tablePlace').append('<table style="width: 1100px" id="carsTable"></table>');

    var carsTable = $('#carsTable');

    carsTable.append('<tr><th>Изображение</th><th>ID</th><th>Марка</th><th>Название</th><th>Ценаб, б.р</th><th>Состояние</th>' +
        '<th>Год выпуска</th><th>Пробег</th><th>Тип топлива</th><th>Объем двигателя</th><th>Коробка передач</th></tr>');

    for (var i = 0; i < cars.length; i++) {

        carsTable.append(carRow(cars[i]));

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

var carRow = function(car) {

    var carRow = '<tr class="tableRow">';
    carRow += '<td><img src="' + car.picture + '" width="150"  height="120" align="left"></td>';
    carRow += '<td>' + car.id + '</td>';
    carRow += '<td>' + car.mark + '</td>';
    carRow += '<td>' + car.name + '</td>';
    carRow += '<td>' + car.price + '</td>';
    carRow += '<td>' + car.condition + '</td>';
    carRow += '<td>' + car.dateOfRelease + '</td>';
    carRow += '<td>' + car.mileage + '</td>';
    carRow += '<td>' + car.fuelType + '</td>';
    carRow += '<td>' + car.fuelAmmount + '</td>';
    carRow += '<td>' + car.transmission + '</td>';
    carRow += '<td><button class="carListButtons" onClick="SwitchToChangeCarScreen(' + car.id + ')">Изменить</button><br><button class="carListButtons" onClick="deleteCar(' + car.id + ')">Удалить</button></td>';
    carRow += '</tr>';
    return carRow;

};

var deleteCar = function(ID) {

    var cars = JSON.parse(localStorage.cars);
    cars.forEach(function(item, i, cars) {
        if (item.id === ID)
            cars.splice(i, 1);
    });
    localStorage.setItem('cars', JSON.stringify(cars));
    location.reload();

};