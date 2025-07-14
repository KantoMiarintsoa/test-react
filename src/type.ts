export type User = {
    gender:"male"|"female";
    name:{
        title:string;
        first:string,
        last:string
    },
    location:{
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
    nat:string
}

export type Info = {
    seed:string,
    results:number,
    page:number,
    version:string
}


export type Result = {
    results:User[],
    info:Info
}