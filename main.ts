function getHello(name:string) {
    return 'Hello' + name;
}

export var name = "Mateus";

document.body.innerHTML = getHello(name);

interface iCar {
    brand:string;
    name:string;
    power:number;
}

class Car {
    brand:string;
    name:string;
    power:number;
}

var getCar = function(car:iCar) {
    console.log(car.brand, car.name, car.power);
};

var Camaro = new Car();

Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 45;

getCar(Camaro);
