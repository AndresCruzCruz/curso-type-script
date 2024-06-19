(() => {
    // console.log('Abstract class')

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Salvar el mundo'
        }
    }
    class Villian extends Mutante {
        conquistarMundo(){
            return 'Mundo Conquistado'
        }
    }

    // let wolverine: Mutante;
    // wolverine = new Mutante('Wolverine', 'Logan')
    const wolverine = new Xmen('Wolverine', 'Logan')
    const magneto = new Villian('Magneto', 'Magnus')

    // console.log(wolverine.salvarMundo())
    // console.log(magneto.conquistarMundo())

    const printName = (character: Mutante) => {
        // console.log(character.realName)
    }

    printName(magneto)

})()