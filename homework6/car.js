export class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw new Error();
    }

    if (value.length < 1 || value.length > 50) {
      throw new Error();
    }

    this.#brand = value;
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (typeof value !== 'string') {
      throw new Error();
    }

    if (value.length < 1 || value.length > 50) {
      throw new Error();
    }

    this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (!Number.isInteger(value)) {
      throw new Error();
    }

    const nowDateTimestamp = Date.now();
    const currentYear = new Date(nowDateTimestamp).getFullYear();

    if (value < 1900 || value > currentYear) {
      throw new Error();
    }

    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (typeof value !== 'number' || !Number.isFinite(value) || Number.isNaN(value)) {
      throw new Error();
    }

    if (value < 100 || value > 300) {
      throw new Error();
    }

    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (typeof value !== 'number' || !Number.isFinite(value) || Number.isNaN(value)) {
      throw new Error();
    }

    if (value < 5 || value > 20) {
      throw new Error();
    }

    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number' || !Number.isFinite(value) || Number.isNaN(value)) {
      throw new Error();
    }

    if (value <= 0) {
      throw new Error();
    }

    this.#fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuelCount) {
    if (typeof fuelCount !== 'number' || !Number.isFinite(fuelCount) || Number.isNaN(fuelCount)) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (fuelCount <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (!this.#maxFuelVolume) {
      throw new Error();
    }

    const tempFuelVolume = this.#currentFuelVolume + fuelCount;

    if (tempFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume = tempFuelVolume;
  }

  drive(speed, hours) {
    if (typeof speed !== 'number' || !Number.isFinite(speed) || Number.isNaN(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    }

    if (!Number.isInteger(hours) || hours <= 0) {
      throw new Error('Неверное количество часов');
    }

    if (!this.#maxSpeed) {
      throw new Error();
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    
    if (this.#currentFuelVolume <= 0) {
      throw new Error('Недостаточно топлива');
    }

    if (!this.#fuelConsumption) {
      throw new Error();
    }

    const distanse = speed * hours;

    this.#currentFuelVolume -= this.#fuelConsumption * distanse / 100;
    this.#mileage += distanse;
  }
}