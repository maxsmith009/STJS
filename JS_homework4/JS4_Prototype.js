function Kingdom(kingdomname,isSimple,isAutotrof){
        this.kingdomname=kingdomname;
        this.isSimple = isSimple;
        this.isAutotrof = isAutotrof;
    }

        Kingdom.prototype.getInfo = function(){

        console.log('Kingdom ' + this.kingdomname +' '+ this.isSimple +' '+ this.isAutotrof);

        };

    Kingdom.prototype.getKingdom=function(){

        console.log('Kingdom name is ' + this.kingdomname);

    };

    function Clas(name,isSimple,isAutotrof,clasname){

        Kingdom.apply(this, arguments);

        this.clasname=clasname;
    }

    Clas.prototype= Object.create(Kingdom.prototype);
    Clas.prototype.constructor=Clas;

    Clas.prototype.getClas = function(){

        console.log('Class name is ' + this.clasname);

    };

    Clas.prototype.getInfo = function(){

        Kingdom.prototype.getInfo.apply(this, arguments);

        this.getClas();

    };

    function Species (name,isSimple,isAutotrof,clasname,speciesname,areal,lifeTime,isPredator){

        Clas.apply(this, arguments);
        this.speciesname = speciesname;
        this.areal = areal;
        this.lifeTime = lifeTime;
        this.isPredator = isPredator;
    }

    Species.prototype= Object.create(Clas.prototype);
    Species.prototype.constructor=Species;

    Species.prototype.getSpecies = function(){

        console.log('Species name is ' + this.speciesname);

    };

    Species.prototype.setLifeTime = function(time){

        this.lifeTime = time;

    };
    Species.prototype.getLifeTime = function(){

        console.log('Life time is '  + this.lifeTime);

    };
    Species.prototype.getInfo = function(){

        Clas.prototype.getInfo.apply(this, arguments);
        console.log('Species' + this.speciesname +' '+ this.areal +' '+this.lifeTime+' '+this.isPredator);

    };
