
`use strict`;

class Kingdom {

    constructor(kingdomname, isSimple, isAutotrof) {
        this._kingdomname = kingdomname;
        this._isSimple = isSimple;
        this._isAutotrof = isAutotrof;
    }


    getInfo() {

        console.log('Kingdom ' + this._kingdomname + ' ' + this._isSimple + ' ' + this.isAutotrof);

    }


    getKingdom () {

        console.log('Kingdom name is ' + this._kingdomname);

    }
}



class Clas extends Kingdom{

    constructor(name, isSimple, isAutotrof, clasname) {

        super(name, isSimple, isAutotrof);

        this._clasname = clasname;
    }


    getClas() {

        console.log('Class name is ' + this._clasname);

    };


    getInfo() {

        Kingdom.prototype.getInfo.apply(this, arguments);

        this.getClas();

    };
}
class Species extends Clas{

   constructor(name, isSimple, isAutotrof, clasname, speciesname, areal, lifeTime, isPredator) {

        super(name, isSimple, isAutotrof, clasname)
        this._speciesname = speciesname;
        this._areal = areal;
        this._lifeTime = lifeTime;
        this._isPredator = isPredator;
    }


    getSpecies() {

        console.log('Species name is ' + this._speciesname);

    };

    setLifeTime(time) {

        this._lifeTime = time;

    };

    getLifeTime() {

        console.log('Life time is ' + this._lifeTime);

    };

    getInfo() {

        Clas.prototype.getInfo.apply(this, arguments);
        console.log('Species' + this._speciesname + ' ' + this._areal + ' ' + this._lifeTime + ' ' + this._isPredator);

    };

}

