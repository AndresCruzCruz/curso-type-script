(()=> {

    class Apocalipsis {
        static instance: Apocalipsis

        private constructor(
            public name: string,
        ){}

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis')
            }
            return Apocalipsis.instance
        }

        changeName(newName: string): void {
            this.name = newName
        }
    }

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis')
    // console.log(apocalipsis)

    const apocalipsis1 = Apocalipsis.callApocalipsis()

    const apocalipsis2 = Apocalipsis.callApocalipsis()

    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Apocalipsis ahora es otro')

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3)

})()