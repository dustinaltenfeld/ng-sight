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
  limit = 10;
  loading = false;


  ngOnInit() {
    console.log('InitUsers');
    this.getUsers();
    }

   getUsers(): void {
     this._salesData.getUsers(this.page,this.limit)
     .subscribe(res => {
        console.log('Result from getUsers: ', res);
        this.users = res['page']['data'];
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

