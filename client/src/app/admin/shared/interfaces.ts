export interface User{
    email: string,
    password: string
}

export interface TestSchool{
    _id?:string,
    school:string,
    city:string,
}

export interface MainForm{
    _id?:string,
    name:string,
    tel:string,
    city:string,
    date:string
}

export interface Person{
    _id?:string
    name:string
    email: string,
    tel: string,
    city:string,
    course:string,
    date:string
}

export interface Consult{
    _id?:string
    name:string
    email: string,
    tel: string,
    city:string,
    course:string,
    date:string
}

export interface Anketa{
    _id?:string,
    name:string, 
    tel: string,
    city:string,
    course:string,
    date:string
}
export interface Test{
    _id?:string,
    name:string,
    name2:string,
    school:string,
    email: string,
    tel: string,
    city:string,
    course:string,
    date:string
}



export interface Message{
    message:string
}

export interface Category{
    name:string,
    imageSrc?:string
    user?:string
    _id?:string
}

export interface Position{
    name:string,
    cost:number,
    user?:string,
    category:string,
    _id?:string,
    quantity?:number
}