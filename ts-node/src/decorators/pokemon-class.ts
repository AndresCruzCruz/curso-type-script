function printToConsole( constructor: Function){
    console.log(constructor);
}

const printToConsoleContidional = (print: boolean = false): Function => {
    if(print) {
        return printToConsole;
    } else {
        return () => {};
    }
}

const bloquearPrototipo = function( constructor: Function){ 
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

//Factoy decorator : Regresa la ejecucion de una funcion

function CheckValidPokemonID(){ 
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        // descriptor.value = () => console.log('Hola mundo')

        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 0 || id > 151) {
                return console.error('El iD del pokem esta entre 1 y 800');
            } else {
                return originalMethod(id);
            }
        }
    }
}


//Decorador de propiedad

function redonly( isWritable: boolean = false): Function {
    return function(target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this)
                return 'Fernando'
            },
            set(this, value){
                // console.log(this)
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleContidional(false)
export class Pokemon {

    @redonly(true)
    public puplicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        public name: string,
    ) {}
    
    @CheckValidPokemonID()
    savePokemonToDB(id:number) {
        console.log(`Pokemon saved to DB with id: ${id}`);
    }
}