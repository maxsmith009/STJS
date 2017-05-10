var changeCarForm = function(form, carId) {

    var changeCarForm = '<p>ИЗМЕНЕНИЕ</p>';
    changeCarForm += '<div class="changeForm" align="left">';
    changeCarForm += codeForForm();
    changeCarForm += '<button id="canselButton" type="button" onclick="SwitchToMainPage()">Отмена</button>';
    changeCarForm += '<button id="saveChangesButton" type="button" onclick="saveCar(' + carId + ')">Сохранить изменения</button>';
    changeCarForm += '</div>';
    form.append(changeCarForm);
    loadData(carId);
    $('.changeForm').on('change', function() {
        $('#saveChangesButton').css('display', 'block')
    })

};

var saveCar = function(carId) {

    var cars = JSON.parse(localStorage.cars);
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].id == carId) {
            var car = cars[i];
            break;
        }
    }
    car.id = parseInt($('#carId').val());
    car.mark = $('#carMark').val();
    car.name = $('#carName').val();
    car.price = parseInt($('#carPrice').val());
    car.condition = $('#condition').val();
    car.dateOfRelease = parseInt($('#dateOfRelease').val());
    car.mileage = parseInt($('#mileage').val());
    car.fuelType = $('.fuelType input:radio:checked').val();
    car.fuelAmmount = $('#fuelAmmount').val();
    car.transmission = $('.transmission input:radio:checked').val();
    car.picture = $('#carPicture').val();
    localStorage.setItem('cars', JSON.stringify(cars));
    SwitchToMainPage();
};

var loadData = function(carId) {

    var cars = JSON.parse(localStorage.cars);
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].id == carId) {
            var car = cars[i];
            break;
        }
    }
    if (car) {

        $('#carId').val(car.id);
        $('#carMark').val(car.mark);
        $('#carName').val(car.name);
        $('#carPrice').val(car.price);
        $('#condition').val(car.condition);
        $('#dateOfRelease').val(car.dateOfRelease);
        $('#mileage').val(car.mileage);
        var fuelType = $('.fuelType input:radio');
        for (var i = 0; i < fuelType.length; i++) {
            if (fuelType.eq(i).val() == car.fuelType)
                fuelType.eq(i).attr("checked", true);
        }
        $('#fuelAmmount').val(car.fuelAmmount);
        var transmission = $('.transmission input:radio');
        for (var i = 0; i < transmission.length; i++) {
            if (transmission.eq(i).val() == car.transmission)
                transmission.eq(i).attr("checked", true);
        }
        $('#carPicture').val(car.picture);
    } else {
        $('.changeForm').empty();
        form.append("<p>Такой машины в базе данных нет</p>");
    }
};