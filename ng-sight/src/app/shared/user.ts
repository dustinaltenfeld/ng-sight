export interface Gender {
    id: number;
    name: string

}

export interface User {
    id: number;
    name: string;
    email: string;
    gender: Gender;
    bday: Date;
}