function generate(firstelem, secondelem) {
    var btn1 = document.getElementById(firstelem);
    btn1.style.display = "none";
    var btn2 = document.getElementById(secondelem);
    btn2.style.display = "block";

    var forma = document.createElement('div');
    forma.classNmae = 'studentForm';
    forma.innerHTML = ('<p>Фамилия <input id="1" name="surName"></p>' +
        '<p>Имя <input id="2" name="Name"></p>' +
        '<p>Отчество <input id="3" name="midName"></p>' +
        '<p>Пол</p>' +
        '<p>Мужской <input name="gender" type="radio" value="male">' +
        'Женский <input  name="gender" type="radio" value="female"></p>' +
        '<p>Курс <input id="5" name="course" type="number" min="1" max="5"></p>' +
        '<p>Университет</p>' +
        '<p><select name="univerList" id="university" onchange=\'insertlist(options [selectedIndex].value)\'> <option value="bsuir" ">БГУИР</option> <option value="bsu">БГУ</option> </select></p>' +
        '<p>Заочник <input id="6" name="distantStudent" type="checkbox"></p>' +
        '<p>О себе <textarea id="7"  name="aboutU" cols="40" rows="10"></textarea></p>'
    );
    document.body.appendChild(forma);

}