export const printObect = ( argument: any) => {
    console.log(argument);
}

//El T es un tipo generico que se define en la funcion
export function genericFunction<T>( argument: T) {
    return argument;
}


export const genericFunctionArrow = <T>( argument: T) =>  argument;