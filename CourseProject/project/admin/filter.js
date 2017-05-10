var createFilter = function(form, cars) {

    var filter = '<div class="filter" align="left">';
    filter += '<text> Марка: </text>';
    filter += '<input type="text" id="carMark">';
    filter += "<br>";
    filter += '<text> Модель: </text>';
    filter += '<input type="text" id="carName">';
    filter += "<br>";
    filter += '<text> Состояние: </text>';
    filter += '<select id="carCondition"></select>';
    filter += "<br>";
    filter += '<text> Год выпуска: с: </text>';
    filter += '<input type="text" class="filterTextFields"  id="fromDateOfRelease">';
    filter += '<text> по: </text>';
    filter += '<input type="text" class="filterTextFields" id="toDateOfRelease">';
    filter += "<br>";
    filter += '<text>Пробег: c: </text>';
    filter += '<input type="text"  class="filterTextFields" id="fromMileage">';
    filter += '<text> по: </text>';
    filter += '<input type="text" class="filterTextFields" id="toMileage">';
    filter += "<br>";
    filter += '<text>Тип топлива: </text>';
    filter += '<select id="fuelType"></select>';
    filter += "<br>";
    filter += '<text>Объем двигателя: </text>';
    filter += '<input type="text" style="width: 60px" id="fuelAmmount">';
    filter += "<br>";
    filter += '<text>Коробка передач: </text>';
    filter += '<select id="transmission"></select>';
    filter += "<br>";
    filter += '<button id="filterButton" type="button">Фильтр</button>';
    filter += '</div>';

    placeForFilter.append(filter);

    $('#filterButton').on('click', function() {
        runFilter(cars);
    });

    var carCondition = $('#carCondition');
    var fuelType = $('#fuelType');
    var transmission = $('#transmission');
    carCondition.append('<option value="любое">Любое</option>');
    carCondition.append('<option value="новый">Новый</option>');
    carCondition.append('<option value="аварийный">Аварийный</option>');
    carCondition.append('<option value="пробег">С пробегом</option>');
    fuelType.append('<option value="любой">Любой</option>');
    fuelType.append('<option value="бензин">Бензин</option>');
    fuelType.append('<option value="дизель">Дизель</option>');
    fuelType.append('<option value="газ">Газ</option>');
    transmission.append('<option value="любая">Любая</option>');
    transmission.append('<option value="автомат">Автомат</option>');
    transmission.append('<option value="ручная">Ручная</option>');
};

var runFilter = function(cars) {
    var filter = {};
    var newCarList = [];
    filter.mark = $('#carMark').val();
    filter.name = $('#carName').val();
    filter.condition = $('#carCondition').val();
    filter.fromDateOfRelease = $('#fromDateOfRelease').val();
    filter.toDateOfRelease = $('#toDateOfRelease').val();
    filter.fromMileage = $('#fromMileage').val();
    filter.toMileage = $('#toMileage').val();
    filter.fuelType = $('#fuelType').val();
    filter.fuelAmmount = $('#fuelAmmount').val();
    filter.transmission = $('#transmission').val();

    cars.forEach(function(item, i, cars) {
        var isSutible = true;
        if (filter.mark && filter.mark !== cars[i].mark) {
            isSutible = false
        }
        if (filter.name && filter.name !== cars[i].name) {
            isSutible = false;
        }
        if (filter.condition !== 'любое' && filter.condition !== cars[i].condition) {
            isSutible = false;
        }
        if (filter.fromDateOfRelease && filter.fromDateOfRelease > cars[i].dateOfRelease) {
            isSutible = false;
        }
        if (filter.toDateOfRelease && filter.toDateOfRelease < cars[i].dateOfRelease) {
            isSutible = false;
        }
        if (filter.fromMileage && filter.fromMileage > cars[i].mileage) {
            isSutible = false;
        }
        if (filter.toMileage && filter.toMileage < cars[i].mileage) {
            isSutible = false;
        }
        if (filter.fuelType !== 'любой' && filter.fuelType !== cars[i].fuelType) {
            isSutible = false;
        }
        if (filter.fuelAmmount && filter.fuelAmmount !== cars[i].fuelAmmoun) {
            isSutible = false;
        }
        if (filter.transmission !== 'любая' && filter.transmission !== cars[i].transmission) {
            isSutible = false;
        }
        if (isSutible) {
            newCarList.push(cars[i]);
        }
    });

    var table = $('#carsTable');
    table.empty();

    table.append('<tr><th>Изображение</th><th>ID</th><th>Марка</th><th>Название</th><th>Ценаб, б.р</th><th>Состояние</th>' +
        '<th>Год выпуска</th><th>Пробег</th><th>Тип топлива</th><th>Объем двигателя</th><th>Коробка передач</th></tr>');

    if (newCarList.length) {
        for (i = 0; i < newCarList.length; i++)
            table.append(carRow(newCarList[i]));
    } else
        table.append('<p>Таких автомобилей не найдено</p>')


};