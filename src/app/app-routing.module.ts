import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { FriComponent } from './fri/fri.component';
import { MonComponent } from './mon/mon.component';
import { ThrusComponent } from './thrus/thrus.component';
import { TuesComponent } from './tues/tues.component';
import { WedComponent } from './wed/wed.component';

 const routes: Routes = [
  { path: 'Monday', component:MonComponent},
  { path: 'Tuesday', component:TuesComponent },
  { path: 'Wednesday', component:WedComponent },
  { path: 'Thrusday', component:ThrusComponent },
  { path: 'Friday', component:FriComponent },
  // { path: 'Contact', component:ContactlistComponent },
   { path: '',   redirectTo: '/Monday', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
