var createCarView = function(form,carId) {

    var cars=JSON.parse(localStorage.cars);

        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id == carId) {
                cars[i].clickAmmount++;
                var car = cars[i];
                localStorage.setItem('cars',JSON.stringify(cars));
            }
        }
        if (car) {
            var carView = "<div class='block'>";
            carView += '<div class="child">';
            carView+='<img src="' + car.picture + '" width="400"  height="400" align="left">';
            carView += '</div>';
            carView += '<div>';
            carView+="<p>"+car.mark +" "+car.name+"</p>";
            carView+="<br>";
            carView+="Состояние: "+car.condition;
            carView+="<br>";
            carView+="Год выпуска: "+car.dateOfRelease+"г.";
            carView+="<br>";
            carView+="Пробег: "+car.mileage+" км";
            carView+="<br>";
            carView+="Тип топлива: "+car.fuelType;
            carView+="<br>";
            carView+="Объем двигателя: "+car.fuelAmmount+" куб.см.";
            carView+="<br>";
            carView+="Коробка передач: "+car.transmission;
            carView += '</div>';
            carView += '</div>';
            form.append(carView);
        }
        else {

            form.append("<p>Такой машины в базе данных нет, сорян!!!(((</p>");

        }
};