//it is a structural design pattern that allows you to dynamically add behavior and responsibilities
//without modifying their code 

class Car{
    drive(){
        return 'driving';
    }
}

class CarDecorator{
    constructor(car){
        this.car = car;
    }

    drive(){
        return this.car.drive();
    }
}

class GPSDecorator extends CarDecorator{
    drive(){
        return `${super.drive()} with GPS`;
    }
}

class SunRoofDecorator extends CarDecorator{
    drive(){
        return `${super.drive()} with Sunroof`;
    }
}

const myCar = new Car();

const myCarWithGps = new GPSDecorator(myCar);
const myCarWithSunroof = new SunRoofDecorator(myCarWithGps);
console.log(myCarWithSunroof.drive());