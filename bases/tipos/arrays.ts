(() => {
    // const numbers: (string | number | boolean)[] = [1,2,3,4,'5',6,7,8,9,10];
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    const villian = ['Omega Rojo', 'Dormamu', 'Duende verde'];
    villian.forEach(element => {
        console.log(element);
    });



    numbers.push(11);


    console.log(numbers)
})();