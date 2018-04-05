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
import { AngularFireModule } from "angularfire2";
import { environment } from '../environments/environment.prod';
import { CategoryComponent } from './category/category.component';
import { CategoryModule } from './module/category.module';
import { CategoryService } from './services/category.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig = environment.firebaseConfig;
@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    NavbarComponent,
    ProjectComponent,
    HomeComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    CategoryModule,
    AngularFireModule.initializeApp(firebaseConfig,'projectsmanager'),
    AngularFireDatabaseModule
  ],
  exports:[
    AppRoutingModule
],
  providers: [
    ProjectService,
    HttpClient,
    CategoryService
  ],
  entryComponents:[
    EditDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }