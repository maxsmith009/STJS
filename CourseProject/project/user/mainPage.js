var createSearchBar = function(form){
    form.append("<input type='text' size='100' id='searchText' placeholder='Введите текст поиска...'>");
    form.append("<button type='button'  id='searchButton'>Поиск</button>");
    form.append("<br>");
    $('#searchButton').on('click',function(){
        var searchTextArray=$('#searchText').val().split(' ');
        SwitchToCarsPage(searchTextArray);

    });
    };

var createCarGrid = function (form) {

    var carTable="<table id='carTable' border=1 solid>";
    $.getJSON('cars.json', function(data) {
        (data.cars).sort(function(obj1,obj2){

            return obj2.clickAmmount - obj1.clickAmmount;

                    });
        var k=0;

        for(var i=0;i<5;i++){
            carTable+='<tr>';
            for(var j=0;j<5;j++) {
                var CarID=data.cars[k].id;
                carTable += '<td align="center" onclick="SwitchToCarIDPage('+CarID+')">';
                carTable+= '<img src="data.cars[k].picture" width="100" height="100">' ;
                carTable+= '<br>';
                carTable+= data.cars[k].mark ;
                carTable+= ' ';
                carTable+= data.cars[k].name;
                carTable+= '    ';
                carTable+= data.cars[k].price + ' б.р.';
                carTable+= '<br>';
                carTable+= data.cars[k].dateOfRelease;
                carTable+= ' ';
                carTable+= data.cars[k].mileage;
                carTable+= '    ';
                carTable+= (data.cars[k].price*1.93) + ' $';
                carTable+= '</td>';
                k++;
            }
        carTable+='</tr>';

        }
        carTable+='</table>';

        form.append(carTable);



    });
};