var createCarView = function (carId) {

    var carTable="<div>";
    $.getJSON('cars.json', function(data) {

        for(var i=0;i<data.cars.length;i++){
            if (data.cars[i].id==carId){
                var car=data.cars[i];

            }
        }
           if(car){






           }
           else
           {}
           /*   for(var j=0;j<5;j++) {
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
        */


    });
};