export interface Genderid {
    id: number;
    gender: string

}

export interface User {
    id: number;
    name: string;
    email: string;
    genderid: Genderid;
    bday: Date;
}