(() => {
    const fullName = (firstName:String, ...restArgs:string[]):String => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superMan = fullName('Clark','Joseph', 'Kent');

    console.log(superMan);  

})()