class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log(`Soy ${this.nombre}!`);
    }

    showStats() {
        console.log(`nombre: ${this.nombre}`);
        console.log(`fuerza: ${this.fuerza}`);
        console.log(`velocidad: ${this.velocidad}`);
        console.log(`salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} recupero +10 de salud`);
    }
}



const ninja1 = new Ninja("shinobi", 30);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

