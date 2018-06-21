import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BuckComponent } from './buck/buck.component';
import { BuckDetailComponent } from './buck-detail/buck-detail.component';
import { BuckCreateComponent } from './buck-create/buck-create.component';
import { BuckEditComponent } from './buck-edit/buck-edit.component';
import { BuckDeleteComponent } from './buck-delete/buck-delete.component';

const appRoutes: Routes = [
  {
    path: 'bucks',
    component: BuckComponent,
    data: { title: 'Bucks Roster' }
  },
  {
    path: 'buck-details/:id',
    component: BuckDetailComponent,
    data: { title: 'Buck Details' }
  },
  {
    path: 'buck-create',
    component: BuckCreateComponent,
    data: { title: 'Add a Buck' }
  },
  {
    path: 'buck-edit/:id',
    component: BuckEditComponent,
    data: { title: 'Edit Buck' }
  },
  {
    path: 'buck-delete/:id',
    component: BuckDeleteComponent,
    data: { title: 'Waive a buck' }
  },
  { path: '',
    redirectTo: '/bucks',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BuckComponent,
    BuckDetailComponent,
    BuckCreateComponent,
    BuckEditComponent,
    BuckDeleteComponent
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
