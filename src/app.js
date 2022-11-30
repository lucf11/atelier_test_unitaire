class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(cote1, cote2, cote3){
        this.cote1 = cote1;
        this.cote2 = cote2;
        this.cote3 = cote3;
    }

    setBaseHauteur(base, hauteur){
        this.base = base;
        this.hauteur = hauteur;
    }

    getArea(){
        return (this.base * this.hauteur) / 2;
    }

    getIsocele(){
        return this.cote1 === this.cote2 || this.cote1 === this.cote3 || this.cote2 === this.cote3;
    }

    getEquilateral(){
        return this.cote1 === this.cote2 && this.cote3 === this.cote1;
    }

    getTriangleScalene(){
        return this.cote1 !== this.cote2 && this.cote1 !== this.cote3;
    }
}



module.exports = {
    Cube:Cube,
    Triangle:Triangle
}