import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { RosterCreateComponent } from './roster-create/roster-create.component';
import { RosterEditComponent } from './roster-edit/roster-edit.component';
import { RosterDetailComponent } from './roster-detail/roster-detail.component';
import { RosterDeleteComponent } from './roster-delete/roster-delete.component';

const appRoutes: Routes = [
  {
    path: 'roster',
    component: RosterComponent,
    data: { title: 'Buck\'s Roster' }
  },
  {
    path: 'roster-details/:id',
    component: RosterDetailComponent,
    data: { title: 'Roster Details' }
  },
  {
    path: 'roster-create',
    component: RosterCreateComponent,
    data: { title: 'Add a Player' }
  },
  {
    path: 'roster-edit/:id',
    component: RosterEditComponent,
    data: { title: 'Edit Roster' }
  },
  {
    path: 'roster-delete/:id',
    component: RosterDeleteComponent,
    data: { title: 'Waive a Player' }
  },
  { path: '',
    redirectTo: '/roster',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    RosterCreateComponent,
    RosterEditComponent,
    RosterDetailComponent,
    RosterDeleteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
