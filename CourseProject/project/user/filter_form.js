var createFilter=function(form,cars){

    var filter='<div class="filter" align="right">';
    filter+='<text> Марка: </text>';
    filter+='<input type="text" id="carMark">';
    filter+="<br>";
    filter+='<text> Модель: </text>';
    filter+='<input type="text" id="carName">';
    filter+="<br>";
    filter+='<text> Состояние: </text>';
    filter+='<select id="carCondition"></select>';
    filter+="<br>";
    filter+='<text> Год выпуска: с: </text>';
    filter+='<input type="text" width="30px" id="fromDateOfRelease">';
    filter+="<br>";
    filter+='<text> по: </text>';
    filter+='<input type="text" width="30px" id="toDateOfRelease">';
    filter+="<br>";
    filter+='<text>Пробег: c: </text>';
    filter+='<input type="text" width="30px" id="fromMileage">';
    filter+="<br>";
    filter+='<text> по: </text>';
    filter+='<input type="text" width="30px" id="toMileage">';
    filter+="<br>";
    filter+='<text>Тип топлива: </text>';
    filter+='<select id="fuelType"></select>';
    filter+="<br>";
    filter+='<text>Объем двигателя: </text>';
    filter+='<input type="text" width="30px" id="fuelAmmount">';
    filter+="<br>";
    filter+='<text>Коробка передач: </text>';
    filter+='<select id="transmission"></select>';
    filter+="<br>";
    filter+='<button id="filterButton" type="button">Фильтровать базар</button>';
    filter+='</div>';
    form.append(filter);
    $('#filterButton').on('click',function(){runFilter(cars);});
    var carCondition=$('#carCondition');
    var fuelType=$('#fuelType');
    var transmission=$('#transmission');
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

var runFilter=function(cars){
    var filter={};
    var newCarList=[];
    filter.mark=$('#carMark').val();
    filter.name=$('#carName').val();
    filter.condition=$('#carCondition').val();
    filter.fromDateOfRelease=$('#fromDateOfRelease').val();
    filter.toDateOfRelease=$('#toDateOfRelease').val();
    filter.fromMileage=$('#fromMileage').val();
    filter.toMileage=$('#toMileage').val();
    filter.fuelType=$('#fuelType').val();
    filter.fuelAmmount=$('#fuelAmmount').val();
    filter.transmission=$('#transmission').val();
    for(var i=0;i<cars.length;i++){
        var yes=true;
        if(!filter.mark){
        }
        else
        if(filter.mark!==cars[i].mark){
            yes=false;
        }
        if(!filter.name){
        }
        else
        if(filter.name!==cars[i].name){
            yes=false;
        }
        if(filter.condition==='любое'){

        }
        else
        if(filter.condition!==cars[i].condition){
            yes=false;
        }

        if(!filter.fromDateOfRelease){
        }
        else
        if(filter.fromDateOfRelease > cars[i].dateOfRelease){
            yes=false;
        }
        if(!filter.toDateOfRelease){
        }
        else
        if(filter.toDateOfRelease < cars[i].dateOfRelease){
            yes=false;
        }

        if(!filter.fromMilleage){
        }
        else
        if(filter.fromMileage > cars[i].mileage){
            yes=false;
        }
        if(!filter.toMileage){
        }
        else
        if(filter.toMileage < cars[i].mileage){
            yes=false;
        }

        if(filter.fuelType==='любой'){

        }
        else
        if(filter.fuelType!==cars[i].fuelType){
            yes=false;
        }
        if(!filter.fuelAmmount){
        }
        else
        if(filter.fuelAmmount!==cars[i].fuelAmmount){
            yes=false;
        }
        if(filter.transmission==='любая'){

        }
        else
        if(filter.transmission!==cars[i].transmission){
            yes=false;
        }
        if(yes){
            newCarList.push(cars[i]);
        }
    }
    var ul=$('#carList');
    ul.empty();
    if (newCarList.length){
    for(i=0;i<newCarList.length;i++)
        ul.append(loadCarInfo(newCarList[i]));
    }
    else
        ul.append('<p>Таких автомобилей не найдено</p>')


};