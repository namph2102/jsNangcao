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
Car.prototype.brake = function () {
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
// oto1.brake();
// oto1.acclerate();

// oto2.brake();
// oto2.brake();
// oto2.brake();
// oto2.acclerate();


class CarCL {
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
         return this;
    }
    brake() {
        this.speed -= 5;
         console.log(`${this.make} đi với tốc độ ${this.speed} km/h`);
         return this;
    }

}
const ford=new CarCL('Ford',120);
console.log(ford);
ford.acclerate();
console.log(ford.speedUS);

ford.speedUS=50
console.log(ford);

// hiểu về Kế thừa

const Price=function (make,speed,price){
    Car.call(this,make,speed)
    this.price=price
}
Price.prototype=Object.create(CarCL.prototype)
Price.prototype.said=function(){
    console.log(`${this.make} with ${this.speed} km/h have $ ${this.price}`);
}
// const nameCar=new Price('Roll Roils',320,5000);
// nameCar.said();
// nameCar.speedUS=50;
// nameCar.acclerate()

// console.log(nameCar.__proto__.__proto__);


// lab 7.3
// 1)
const EV=function(make,speed,charge){
    Car.call(this,make,speed)
    this.charge = charge;
   

}
EV.prototype=Object.create(Car.prototype)
// 2) tạo method chargeBattery
EV.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo;
}
//3) Khởi tạo phương thức (method) 'accelerate' để tăng tốc độ ô tên thêm 20, đồng thời giảm mức pin (charge) đi 1%
EV.prototype.accelerate=function(){
    this.speed+=20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}
const tesla=new EV('Tesla',120,23);
// tesla.chargeBattery(140)
console.log(tesla);
tesla.accelerate();

tesla.accelerate();
tesla.chargeBattery(100);
tesla.brake();

// 4) 
const ElectricCar=function(make,speed,charge){
    EV.call(this,make,speed);
    this.charge=charge;
}
console.log('---------------------------------------------------------------------------');
// kế thừa phương thức nguyên thủy __proto__
ElectricCar.prototype=Object.create(EV.prototype);
const Lambo= new  ElectricCar('Lamboghini',320,90);
Lambo.accelerate();
Lambo.chargeBattery(100);
Lambo.brake();
Lambo.accelerate();
Lambo.brake();
console.log(Lambo);

// lab 7.4 code theo web

class Account{
    #movements=[];
    localtion=navigator.language;
    #pin;
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
      
    }
     getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
         this.currency+=val;
         return this;
    }
    withdrwal(val){
        this.deposit(-val)
        this.currency-=val;
        return this;
    }

    _approvement(val){
        return true;
    }
    requestLoan(val){
        if(this._approvement(val)){
            this.currency+=val;
            this.deposit(val);
            console.log('You will loan about $'+val);
        }
        return this;
    }
    static hellper(){
        console.log('asdasd');
    }

}
const acc1=new Account('Hoài Nam',50000,1111)

acc1.deposit(20000).deposit(1233).deposit(2333).withdrwal(2000).requestLoan(22)
//lab 7.5

class EVCL  extends CarCL{
    #charge;
    constructor (make,speed,charge){
        super(make,speed);
        this.#charge=charge;
    }
    chargeBattery(chargeTo){
        this.#charge=chargeTo;
        return this;
    }
    accelerate(){
        this.speed+=20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
}
console.log('-----------------------------------------------');
const Rivian=new EVCL('Rivian',120,23);
console.log(Rivian);
Rivian.accelerate().chargeBattery(12).accelerate().accelerate().brake();



