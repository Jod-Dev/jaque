export interface User {
    picture: string
    name: string,
    fathersLastName: string,
    mothersLastName: string,
    email: string,
    roleId: number,
    active: boolean 
}

export interface Role {
    id: number
    position: string
}

export interface UserWithRole {
    picture: string
    name: string,
    fathersLastName: string,
    mothersLastName: string,
    email: string,
    role: string,
    active: boolean  
}