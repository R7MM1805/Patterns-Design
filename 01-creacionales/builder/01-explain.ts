/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../../helpers/colors.ts";

class Computer{
    public cpu: string = 'cpu is not defined';
    public ram: string = 'ram is not defined';
    public storage: string = 'storage is not defined';
    public gpu?: string;

    displayConfiguration(){
        console.log(`Computer configuration
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        GPU: ${this.gpu}
        `);
    }
}

class ComputerBuilder {

    private computer: Computer;

    constructor(){
        this.computer = new Computer();
    }

    setCpu(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRam(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGpu(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build(){
        return this.computer;
    }
}

function main(){
    const basicComputer = new ComputerBuilder()
    .setCpu('Intel Core 2 Duo')
    .setRam('4 GB')
    .setStorage('256 GB')
    .build();

    console.log('%cBasic computer:', COLORS.blue);
    basicComputer.displayConfiguration();

    const gamingComputer = new ComputerBuilder()
    .setCpu('Core I9')
    .setRam('64 GB')
    .setStorage('2 TB')
    .setGpu('16 GB')
    .build();

    console.log('%cGaming computer:', COLORS.green);
    gamingComputer.displayConfiguration();
}

main();