import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { TablegymComponent } from './tablegym/tablegym.component';
import { MonComponent } from './mon/mon.component';
import { TuesComponent } from './tues/tues.component';
import { TablegenralComponent } from './tablegenral/tablegenral.component';
import { table } from 'src/service';
import { HttpClientModule } from '@angular/common/http';
import { WedComponent } from './wed/wed.component';
import { ThrusComponent } from './thrus/thrus.component';
import { FriComponent } from './fri/fri.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { ProgramlistComponent } from './programlist/programlist.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { FotterComponent } from './fotter/fotter.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    TablegymComponent,
    MonComponent,
    TuesComponent,
    TablegenralComponent,
    WedComponent,
    ThrusComponent,
    FriComponent,
    PreloaderComponent,
    HeaderComponent,
    MainbannerComponent,
    ProgramlistComponent,
    ContactlistComponent,
    FotterComponent,
    ScheduleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [table],
  bootstrap: [AppComponent]
})
export class AppModule { }
