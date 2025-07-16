import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { App } from './app';
import { LoginComponent } from './auth/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Contato } from './pages/contato/contato';
import { Sobre } from './pages/sobre/sobre';
import { Header } from './core/header/header';
import { Sidebar } from './core/sidebar/sidebar';
import { Footer } from './core/footer/footer';
import { AppRoutingModule } from './app.routes';
import { BaseChartDirective } from 'ng2-charts';


@NgModule({
  declarations: [
    App,
    LoginComponent,
    DashboardComponent,
    Contato,
    Sobre,
    Header,
    Sidebar,
    Footer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BaseChartDirective
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
