import { Component, OnInit } from '@angular/core';

const multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '1/1',
        value: 25.5
      },
      {
        name: '1/2',
        value: 26.3
      },
      {
        name: '1/3',
        value: 26.5
      },
    ]
  }
];


@Component({
  selector: 'app-chart',
  template: `
    <h2 style="text-align: center">あなたの体調の記録</h2>
    <h3 style="text-align: center">体温</h3>
    <div style="width: 100%; height: 100%; padding: 2rem 0; display: flex; justify-content: center">
      <ngx-charts-line-chart
        [view]="view"
        [scheme]="colorScheme"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel"
        [timeline]="timeline"
        [results]="multi"
        (select)="onSelect($event)"
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      >
      </ngx-charts-line-chart>
    </div>
  `,
  styleUrls: [ './chart.component.scss' ]
})
export class ChartComponent implements OnInit {
  multi: any[];
  view: any[] = [ 250, 300 ];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = '日付';
  yAxisLabel = '体温';
  timeline = true;

  colorScheme = {
    domain: [ '#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5' ]
  };

  constructor() {
    Object.assign(this, {multi});
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event): void {
    this.view = [ event.target.innerWidth / 1.35, 400 ];
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
