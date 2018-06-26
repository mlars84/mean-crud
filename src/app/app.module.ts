import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RosterComponent } from './components/roster/roster.component';
import { RosterCreateComponent } from './components/roster-create/roster-create.component';
import { RosterEditComponent } from './components/roster-edit/roster-edit.component';
import { RosterDetailComponent } from './components/roster-detail/roster-detail.component';

const appRoutes: Routes = [
  {
    path: 'roster',
    component: RosterComponent,
    data: { title: 'Player List' }
  },
  {
    path: 'roster-details/:id',
    component: RosterDetailComponent,
    data: { title: 'Player Details' }
  },
  {
    path: 'roster-create',
    component: RosterCreateComponent,
    data: { title: 'Add Player' }
  },
  {
    path: 'roster-edit/:id',
    component: RosterEditComponent,
    data: { title: 'Edit Player' }
  },
  { path: '',
    redirectTo: '/roster',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    RosterCreateComponent,
    RosterEditComponent,
    RosterDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
