var codeForForm = function() {
    var formCode = '<text> ID: </text>';
    formCode += '<input type="text" id="carId">';
    formCode += "<br>";
    formCode += '<text> Марка: </text>';
    formCode += '<input type="text" id="carMark">';
    formCode += "<br>";
    formCode += '<text> Модель: </text>';
    formCode += '<input type="text" id="carName">';
    formCode += "<br>";
    formCode += '<text> Состояние: </text>';
    formCode += '<input type="text" id="condition">';
    formCode += "<br>";
    formCode += '<text> Год выпуска: </text>';
    formCode += '<input type="text" id="dateOfRelease">';
    formCode += "<br>";
    formCode += '<text>Пробег:  </text>';
    formCode += '<input type="text" width="30px" id="mileage">';
    formCode += "<br>";
    formCode += "<div class='fuelType'>";
    formCode += '<text>Тип топлива: </text>';
    formCode += '<input type="radio" name="fuelType" id="fueltype1" value="дизель" ><label for="fueltype1">Дизель</label>';
    formCode += '<input type="radio" name="fuelType" id="fueltype2" value="бензин" ><label for="fueltype2">Бензин</label>';
    formCode += '<input type="radio" name="fuelType" id="fueltype3" value="газ" ><label for="fueltype3">Газ</label>';
    formCode += "</div>";
    formCode += '<text>Объем двигателя: </text>';
    formCode += '<input type="text" width="30px" id="fuelAmmount">';
    formCode += "<br>";
    formCode += "<div class='transmission'>";
    formCode += '<text>Коробка передач: </text>';
    formCode += '<input type="radio" name="transmission" id="transtission1" value="ручная" ><label for="transtission1">Ручная</label>';
    formCode += '<input type="radio" name="transmission" id="transtission2" value="автомат" ><label for="transtission2">Автомат</label>';;
    formCode += "</div>";
    formCode += '<text> Цена: </text>';
    formCode += '<input type="text" id="carPrice">';
    formCode += "<br>";
    formCode += '<text> Фото: </text>';
    formCode += '<input type="text" id="carPicture">';
    formCode += "<br>";
    return formCode;
};

window.onbeforeunload = function() {
    var newCar = {};
    newCar.id = $('#carId').val();
    newCar.mark = $('#carMark').val();
    newCar.name = $('#carName').val();
    newCar.price = $('#carPrice').val();
    newCar.condition = $('#condition').val();
    newCar.dateOfRelease = $('#dateOfRelease').val();
    newCar.mileage = $('#mileage').val();
    newCar.fuelType = $('.fuelType input:radio:checked').val();
    newCar.fuelAmmount = $('#fuelAmmount').val();
    newCar.transmission = $('.transmission input:radio:checked').val();
    newCar.picture = $('#carPicture').val();
    sessionStorage.setItem('data', JSON.stringify(newCar));

};


window.onload = function() {
    var data = JSON.parse(sessionStorage.data);
    $('#carId').val(data.id);
    $('#carMark').val(data.mark);
    $('#carName').val(data.name);
    $('#carPrice').val(data.price);
    $('#condition').val(data.condition);
    $('#dateOfRelease').val(data.dateOfRelease);
    $('#mileage').val(data.mileage);
    var fuelType = $('.fuelType input:radio');
    for (var i = 0; i < fuelType.length; i++) {
        if (fuelType.eq(i).val() == data.fuelType)
            fuelType.eq(i).attr("checked", true);
    }
    $('#fuelAmmount').val(data.fuelAmmount);
    var transmission = $('.transmission input:radio');
    for (var i = 0; i < transmission.length; i++) {
        if (transmission.eq(i).val() == data.transmission)
            transmission.eq(i).attr("checked", true);
    }
    $('#carPicture').val(data.picture);
};