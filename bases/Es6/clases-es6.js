(()=> {

    class Avenger {
        name;
        power;
        /**
         * 
         * @param {String} name 
         * @param {number} power 
         */
        constructor(name = "No name", power = 123){
            this.name = name;
            this.power = power; 
        }

    }

    class FlyinAvenger extends Avenger{
        flying;

        constructor(name, power, flying = true){
            super(name, power);
            this.flying = flying;
        }

        fly(){
            console.log('I can fly');
        }
    }

    const Hulk = new Avenger('Hulk', 9000);
    const falcon = new FlyinAvenger('Falcon', 5000);

    console.log(falcon);
    falcon.fly();
})()