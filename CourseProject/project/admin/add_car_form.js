var addCarForm = function(form) {

    var addForm = '<p>ДОБАВЛЕНИЕ</p>';
    addForm += '<div class="addForm" align="left">';
    addForm += codeForForm();
    addForm += '<button id="addButton" type="button" onclick="addCar()">Добавить</button>';
    addForm += '<button id="canselButton" type="button" onclick="SwitchToMainPage()">Отмена</button>';
    addForm += '</div>';
    form.append(addForm);

};

var addCar = function() {
    var cars = JSON.parse(localStorage.cars);
    var newCar = {};
    newCar.id = parseInt($('#carId').val());
    newCar.mark = $('#carMark').val();
    newCar.name = $('#carName').val();
    newCar.price = parseInt($('#carPrice').val());
    newCar.condition = $('#condition').val();
    newCar.dateOfRelease = parseInt($('#dateOfRelease').val());
    newCar.mileage = parseInt($('#mileage').val());
    newCar.fuelType = $('.fuelType input:radio:checked').val();
    newCar.fuelAmmount = $('#fuelAmmount').val();
    newCar.transmission = $('.transmission input:radio:checked').val();
    newCar.picture = $('#carPicture').val();
    newCar.clickAmmount = 0;
    cars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(cars));
    SwitchToMainPage();
};