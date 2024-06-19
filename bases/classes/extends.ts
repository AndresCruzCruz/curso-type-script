(()=> {
    // console.log('Extends')

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) { 
            // console.log('Constructor Avenger llamado')
        }

        protected getFullName(): string {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            this.name = name
        }

        getFullNameDesdeXmen(): string {
            return super.getFullName()
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    // console.log(wolverine.fullName)  
    // console.log(wolverine.getFullNameDesdeXmen())  
    wolverine.fullName = 'Cambio de nombre'

    // console.log(wolverine.fullName)

})()