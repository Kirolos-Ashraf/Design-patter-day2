// A Shop (the Director) and two builder objects: CarBuilder and TruckBuilder. 
// The Shop's construct method accepts a Builder instance which it then takes through a series of assembly steps: step1 and step2. 
// The Builder's get method returns the newly assembled products (Car objects and Truck objects). (builder design pattern)


// iam using a builder design pattern to solve this problem ( question )

class Car {
	constructor(name, type, price, typeSolar, motorHorse){
		this.name = name;
          this.type = type;
          this.typeSolar = typeSolar;
          this.motorHorse = motorHorse
		this.price = price;
		
	}

	toString(){
		return console.log(JSON.stringify(this))
	}
}

class Truck {
	constructor(name, type, price, typeSolar, motorHorse){
		this.name = name;
          this.type = type;
          this.typeSolar = typeSolar;
          this.motorHorse = motorHorse
		this.price = price;
		
	}

	toString(){
		return console.log(JSON.stringify(this))
	}
}





class CarBuilder {
	// builder design pattern
	constructor(){
		this.car = new Car()
	}
     makeName(name){ 
          this.car.name = name
          return this
     }
	makePaid(price){
		
		this.car.price = price
		return this;
	}
     makeType(type) { 
          this.car.type = type
          return this
     }
     makeTypeSolar(typeSolar){
          this.car.typeSolar = typeSolar;
          return this
     }
     makeMotorHorse(motorHorse){
          this.car.motorHorse = motorHorse
          return this
     }
	buildCar(){
		console.log(this.car)
		return this.car
	}
}


class TruckBuilder{
	// builder design pattern
	constructor(){
		this.Truck = new Truck()
	}
     makeName(name){ 
          this.Truck.name = name
          return this
     }
	makePaid(price){
		
		this.Truck.price = price
		return this;
	}
     makeType(type) { 
          this.Truck.type = type
          return this
     }
     makeTypeSolar(typeSolar){
          this.Truck.typeSolar = typeSolar;
          return this
     }
     makeMotorHorse(motorHorse){
          this.Truck.motorHorse = motorHorse
          return this
     }
	buildTruck(){
		console.log(this.Truck)
		return this.Truck
     }
}


const bmw = new CarBuilder().makeName("BMW").makePaid(22).makeType('germany').makeTypeSolar('gas').makeMotorHorse(200).buildCar()

bmw.toString()

const mercedes = new TruckBuilder().makeName('Mercedes').makePaid(33).makeType('germany').makeTypeSolar('solar').makeMotorHorse(400).buildTruck()
mercedes.toString()