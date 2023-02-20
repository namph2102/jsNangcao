/// lab 7   
//lab 7.1
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
// kiểu phương thức nguyên thủy
Car.prototype.acclerate = function () {
    this.speed += 10;
    this.result();
}
Car.prototype.bakere = function () {
    this.speed -= 5;
    this.result();
}
Car.prototype.result = function () {
    console.log(`${this.make} đi với tốc độ ${this.speed} km/h`);
}

const oto1 = new Car('BWM', 120);
const oto2 = new Car('Mercedes', 95);

// oto1.acclerate();
// oto1.acclerate();
// oto1.bakere();
// oto1.acclerate();

// oto2.bakere();
// oto2.bakere();
// oto2.bakere();
// oto2.acclerate();


class Cars {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS () {
        return this.speed / 1.6 
    }
    set speedUS(ss) {
        return this.speed =ss*1.6;
    };
    acclerate() {
        this.speed += 10;
         console.log(`${this.make} đi với tốc độ ${this.speed} km/h`);
    }
    bakere() {
        this.speed -= 5;
         console.log(`${this.make} đi với tốc độ ${this.speed} km/h`);
    }

}
const ford=new Cars('Ford',120);
console.log(ford);
ford.acclerate();
console.log(ford.speedUS);

ford.speedUS=50
console.log(ford);

