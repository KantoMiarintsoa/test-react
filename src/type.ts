export type User = {
    gender:"male"|"female";
    name:{
        title:string;
        first:string,
        last:string
    },
    localisation:{
        street:{
            number:number,
            name:string
        },
        city:string,
        state:string,
        country:string,
        postcode:string
    },
    email:string,
    dob:{
        date:string,
        age:number
    },
    phone:string,
    cell:string,
    picture:{
        large:string
    },
    info:{
        seed:string,
        results:number,
        page:number,
        version:string
    }
}


export type Result = {
    results:User[]
}