import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent {
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  public barChartLabels: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];
  public barChartData = [
    { data: [65, 59, 80, 81], label: 'Vendas' }
  ];
  public barChartType: ChartType = 'bar';
}
