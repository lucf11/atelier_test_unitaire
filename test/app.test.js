const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. Si le triangle est scalene', function(done) {
        let t1 = new Triangle(3,6,4);
        expect(t1.getTriangleScalene()).to.equal(true);
        done();
    });
    it('2. Si le triangle est isocèle', function(done) {
        let t2 = new Triangle(5,5,7);
        expect(t2.getIsocele()).to.equal(true);
        done();
    });
    it('3. Si le triangle est equilateral', function(done) {
        let t3 = new Triangle(4,4,4);
        expect(t3.getEquilateral()).to.equal(true);
        done();
    });
    it('4. Aire du triangle', function(done) {
        let t4 = new Triangle(2,8,5);
        t4.setBaseHauteur(4,6);
        expect(t4.getArea()).to.equal(12);
        done();
    
    })
});