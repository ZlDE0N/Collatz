import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { HighchartComponent } from './highchart/highchart.component';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

import { AddComponent } from './add/add.component';
import { AsideComponent } from './aside/aside.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HighchartService } from './services/highchart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HighchartComponent,
    AddComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartModule,
    FormsModule
  ],
  providers: [HighchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
