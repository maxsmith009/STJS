function filtr(arr, filter) {
  var rez = [];
  rez.push(arr[0]);
  var isUniq = false;

  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < rez.length; j++) {
      if (arr[i][filter] === rez[j][filter]) {
        isUniq = false;
        break;
      } else {
        isUniq = true;
      }
    }
    if (isUniq) rez.push(arr[i]);

  }
  return rez;
}

console.log(filtr([{ a: 1, b: 1, c: 1}, { a: 3, b: 6,  c: 4}, {  a: 1,  b: 1,  c: 4}, {  a: 2,  c: 1}, {  a: 1,  b: 6}, {  a: 3,  b: 1,  c: 4}], ['a']));
