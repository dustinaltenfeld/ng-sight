import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA : any[] = [
  {data:[65,15,45,62,19], label:'Usernumber'},
  {data:[25,45,46,63,99], label:'Usernumber1'}
];
const SAMPLE_BARCHART_LABELS: string[] = ['W1','W2','W3','W4',"W5"];
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any =  {
    scaleShowVerticalLines: false,
    responsive: true
  };


  ngOnInit() {
  }

}
