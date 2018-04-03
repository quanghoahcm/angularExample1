import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectService } from './services/project.service';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from './module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './projectDialogs/edit/edit.dialog.component';
import { MaterialModule } from './module/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddDialogComponent } from './projectDialogs/add/add.dialog.component';
import { DeleteDialogComponent } from './projectDialogs/delete/delete.dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    NavbarComponent,
    ProjectComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AppRoutingModule
],
  providers: [
    ProjectService,
    HttpClient,
    // {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'checked'}
  ],
  entryComponents:[
    EditDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
