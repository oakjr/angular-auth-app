import { Component, NgModule } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-auth-app';
}


@NgModule({
  declarations: [ /* seus componentes */ ],
  imports: [
    AppRoutingModule,
    RouterOutlet,
    BaseChartDirective,
    // outros módulos como FormsModule, ReactiveFormsModule, Material, etc.
  ],
  bootstrap: [App]
})
export class AppModule { }
