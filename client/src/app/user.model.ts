export interface UserModel{
    id?: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    phone_number: number,
    role: {name:string},
    customer:{name:string},
    address: string,
    createdAt: string,
}

export interface patchUserModel{
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    phone_number: number,
    address: string,
}

export interface customer{
    id: string,
    name: string
}
export interface role{
    id: string,
    name: string
}

export enum Role {
    SuperAdmin = "SuperAdmin",
    Admin = "Admin",
    Subscriber = "Subscriber"
}

export enum columnName{
    firstName = 'First Name', 
    middleName = 'Middle Name', 
    lastName= 'Last Name',
    email= 'Email',
    phoneNumber = 'Phone Number',
    address = 'Address',
    role= 'Role',
    customer = 'Customer',
    createdDate = 'User Created Date',
    edit = 'Edit'
  }