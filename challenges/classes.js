// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid_Maker {
    constructor (attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume () {
        return this.length * this.width * this.height;
    }
  
    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

const cuboid_ = new Cuboid_Maker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("class tester: ", cuboid_.volume()); // 100
console.log("class tester", cuboid_.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create 
// those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends Cuboid_Maker {
    constructor (attrs) {
        super (attrs);
    }

    volume () {
        return 3 * (this.length * this.length * this.length);
    }
};

const cube = new CubeMaker ({
    length: 5,
    width: 5,
    height: 5
});

console.log("stretch volume tester: ", cube.volume());