import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32,45,45,94,45,87,11,32],label: 'Users'},
  {data: [72,45,45,90,45,87,10,32],label: 'NewUsers'},
  {data: [12,45,45,94,45,87,11,32],label: 'DeletedUsers'}
];

const LINE_CHART_LABELS: string[] = [
  'Week1',
  'Week2',
  'Week3',
  'Week4',
  'Week5',
  'Week6',
  'Week7',
  'Week8'
];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }



}
