var obj = [2,'sf',{a:9},{},64,235];
    for (var i=0;i<obj.length;i++) {
        var sObj = JSON.stringify(obj[i]);
        localStorage.setItem(i, sObj);
    }


    var mod = (function Module(){

        function getKey(key){

            return JSON.parse(localStorage.getItem(key));

        }

        function getAll(){

            var arr=[];

            for (var key in localStorage) {
                    var value = localStorage.getItem(key);
                    arr.push({ key: key, value: value });
                }
            return arr;


        }

        function set(key,value){

            return localStorage.setItem(key,JSON.stringify(value))

        }

        function remove(key){

            return localStorage.removeItem(key);

        }

        function clear(){

            return localStorage.clear();

        }

        function add(arr){

            for (var i=0;i<arr.length;i++) {
                for (var key in arr[i]) {
                    var value = JSON.stringify(arr[i][key]);
                    localStorage.setItem(key, value);
                }
            }
        }

        return {

            getKey:getKey,
            getAll:getAll,
            set:set,
            remove:remove,
            clear:clear,
            add:add

        }

    })();

    mod.add([{'a':7}]);
    mod.getAll();
