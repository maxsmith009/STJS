var createSearchBar = function(form) {

    form.append("<input type='text' size='100' id='searchText' placeholder='Введите текст поиска...'>");
    form.append("<button type='button'  id='searchButton'>Поиск</button>");
    form.append("<br>");
    $('#searchButton').on('click', function() {
        var searchText = $('#searchText').val();
        SwitchToCarsPage(searchText);

    });
};

var createCarGrid = function(form) {

    var carTable = "<table id='carTable' border=1 solid>";
    var cars = JSON.parse(localStorage.cars);
    cars = sortCars(cars);

    var k = 0;

    for (var i = 0; i < 5; i++) {
        carTable += '<tr>';
        for (var j = 0; j < 5; j++) {
            var CarID = cars[k].id;
            carTable += '<td align="center" onclick="SwitchToCarIDPage(' + CarID + ')">';
            carTable += '<img src="' + cars[k].picture + '" width="150" height="100">';
            carTable += '<br>';
            carTable += cars[k].mark;
            carTable += ' ';
            carTable += cars[k].name;
            carTable += '    ';
            carTable += cars[k].price + ' б.р.';
            carTable += '<br>';
            carTable += cars[k].dateOfRelease;
            carTable += ' ';
            carTable += cars[k].mileage;
            carTable += '    ';
            carTable += (cars[k].price * 1.93) + ' $';
            carTable += '<div align="right">';
            carTable += (cars[k].price * 2.1) + ' &euro;';
            carTable += '</dim>';
            carTable += '</td>';
            k++;
        }
        carTable += '</tr>';

    }
    carTable += '</table>';
    form.append(carTable);

};

var sortCars = function(obj) {

    obj.sort(function(obj1, obj2) {

        return obj2.clickAmmount - obj1.clickAmmount;

    });
    return obj;

};