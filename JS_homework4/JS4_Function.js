function Kingdom(kingdomname,isSimple,isAutotrof) {

        this._kingdomname = kingdomname;
        this._isSimple = isSimple;
        this._isAutotrof = isAutotrof;

        var Kname=kingdomname;

        this.getInfo = function () {

            console.log('Kingdom ' + this._kingdomname + ' ' + this._isSimple + ' ' + this._isAutotrof);

        };

        function getK(){

            console.log('Kingdom name is ' + Kname);

        }

        this.getKingdom = function () {

            getK();

        };

    }

    function Clas(name,isSimple,isAutotrof,clasname) {

        Kingdom.apply(this,arguments);

        this._clasname = clasname;

        this.getClas = function () {

            console.log('Class name is ' + this._clasname);

        };
        var parentGetInfo = this.getInfo;
        this.getInfo = function () {
            parentGetInfo.call(this);
            this.getClas();

        };
    }

    function Species (name,isSimple,isAutotrof,clasname,speciesname,areal,lifeTime,isPredator) {

        Clas.apply(this, arguments);
        this._speciesname = speciesname;
        this._areal = areal;
        this._lifeTime = lifeTime;
        this._isPredator = isPredator;

        this.getSpecies = function () {

            console.log('Species name is ' + this._speciesname);

        };

        this.setLifeTime = function (time) {

            this._lifeTime = time;

        };
        this.getLifeTime = function () {

            console.log('Life time is ' + this._lifeTime);

        };

        var parentClasGetInfo = this.getInfo;
        this.getInfo = function () {
            parentClasGetInfo.call(this);
            console.log('Species' + this._speciesname + ' ' + this._areal + ' ' + this._lifeTime + ' ' + this._isPredator);

        };
    }
