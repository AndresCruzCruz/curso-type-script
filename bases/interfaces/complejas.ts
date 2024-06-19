(()=>{

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: number;
        country: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 28001,
            country: 'Spain',
        },
        getFullAddress(id: string) {
            return `${this.address.zip}, ${this.address.country}`;
        }
    }


    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 126,
            zip: 28002,
            country: 'Spain',
        },
        getFullAddress(id: string) {
            return `${this.address.zip}, ${this.address.country}`;
        }
    }

})()