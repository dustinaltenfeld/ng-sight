import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user';
import { SalesDataService } from '../../services/sales-data.service';

@Component({
  selector: 'app-users-to-db',
  templateUrl: './users-to-db.component.html',
  styleUrls: ['./users-to-db.component.css']
})
export class UsersToDBComponent implements OnInit {

  constructor(private _salesData: SalesDataService) { 
   
  }
  
  users:  User[];
  total = 0;
  page = 1;
  limit = 3;
  loading = false;

  /*users: User[] = [
    {id: 1,name: 'Aylin Altenfeld',email: 'aa@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(1983,7,29)},
    {id: 2,name: 'Ella Altenfeld',email: 'ea@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(2016,6,19)},
    {id: 3,name: 'Dustin Altenfeld',email: 'da@gmail.com',genderid: {id: 2,gender:'male'},bday: new Date(1987,8,10)},
    {id: 4,name: 'Aylin Altenfeld',email: 'aa@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(1983,7,29)},
    {id: 5,name: 'Aylin Altenfeld',email: 'aa@gmail.com',genderid: {id: 1,gender:'female'},bday: new Date(1983,7,29)},
  ];*/
  

  ngOnInit() {
    this.getUsers();
    }

  getUsers(): void {
     this._salesData.getUsers(this.page, this.limit)
     .subscribe(res => {
        this.users = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;

            });
   } 
  goToPrevious(): void {
    console.log("Previous klicked")
    this.page--;
    this.getUsers();
  }
  goToNext(): void {
    console.log("Next klicked")
    this.page++;
    this.getUsers();
  }
  goToPage(n: number): void {
    this.page = n;
    this.getUsers();
  }
}

