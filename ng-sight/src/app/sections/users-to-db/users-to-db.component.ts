import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user'

@Component({
  selector: 'app-users-to-db',
  templateUrl: './users-to-db.component.html',
  styleUrls: ['./users-to-db.component.css']
})
export class UsersToDBComponent implements OnInit {

  constructor() { }

  users: User[] = [
    {id: 1,name: 'Aylin Altenfeld',email: 'aa@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(1983,7,29)},
    {id: 2,name: 'Ella Altenfeld',email: 'ea@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(2016,6,19)},
    {id: 3,name: 'Dustin Altenfeld',email: 'da@gmail.com',genderid: {id: 2,gender:'male'},bday: new Date(1987,8,10)},
    {id: 4,name: 'Aylin Altenfeld',email: 'aa@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(1983,7,29)},
    {id: 5,name: 'Aylin Altenfeld',email: 'aa@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(1983,7,29)},
  ];
  ngOnInit() {
  }

}
