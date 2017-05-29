var createCarView = function(form, carId) {

    var cars = JSON.parse(localStorage.cars);

    for (var i = 0; i < cars.length; i++) {
        if (cars[i].id == carId) {
            cars[i].clickAmmount++;
            var car = cars[i];
            localStorage.setItem('cars', JSON.stringify(cars));
        }
    }
    if (car) {

        form.append("<div   id='carView' data-template='carViewTemplate' data-bind='source: car'></div>");

        var viewModel = kendo.observable({
            car: car
        });
        kendo.bind($("#carView"), viewModel)


    } else {

        form.append("<div align='center' style='margin: auto'><h1>Такого автомобиля в базе данных нет!!!(((</h1><br><img src='http://bumper-stickers.ru/30160-thickbox_default/grustnyy-smaylik.jpg'> </div>");
    }
};