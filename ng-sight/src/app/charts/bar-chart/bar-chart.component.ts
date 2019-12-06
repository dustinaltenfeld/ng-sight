import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'src/app/services/sales-data.service';

// const SAMPLE_BARCHART_DATA : any[] = [
//   {data:[65,15,45,62,19], label:'Usernumber'},
//   {data:[25,45,46,63,99], label:'Usernumber1'}
// ];
// const SAMPLE_BARCHART_LABELS: string[] = ['W1','W2','W3','W4',"W5"];
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _salesDataService: SalesDataService) { }
  users: any;
  userLabels: string[];
  userData: number[];

  public barChartData: any[] ;
  public barChartLabels: string[] ;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any =  {
    scaleShowVerticalLines: false,
    responsive: true
  };


  ngOnInit() {

    this._salesDataService.getUsers(1,100)
    .subscribe(res =>{
     
      const localChartData = this.getChartData(res);
      
      this.barChartLabels = Object.keys(localChartData);
      console.log(this.barChartLabels)
      let data1 = [];
       
      this.barChartLabels.forEach(element => {data1.push(localChartData[element])        
      });
      console.log(data1)
      
      this.barChartData =  [{data:data1,lable: 'Users'}];
      
   

      
      
    });
  }
  getChartData(res: Response) {
    this.users =res['page']['data'];
    const data =this.users.map(u=>u.gender.name);
    const labels = this.users.map(u=>u.gender.name);

    

    var map = data.reduce(function(sumres, cur) {
      sumres[cur] = (sumres[cur] || 0) + 1;
      return sumres;
    }, {});
    return map
  }
}
