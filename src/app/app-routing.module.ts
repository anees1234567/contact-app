import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

//path setup for component
const routes: Routes = [
  {path:'', component:AllcontactsComponent },
  {
    path:'add-contact', component:CreateContactComponent
  } ,
  {
    path:'edit-contact/:id',component:EditContactComponent
  },
  {
    path:'view-contact/:id',component:ViewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
