(()=>{
    // console.log('Clase básica');

    class Avenger {
        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(){
            return this.avgAge;
        }

        constructor(
            private name: string, 
            public team: string, 
            public realName?: string
        ){}

        bio(): string {
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    // console.log(antman);

    // console.log(antman.bio());

})()