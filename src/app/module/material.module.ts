import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatToolbarModule, MatCheckboxBase, MatCheckboxModule,
  } from '@angular/material';
  import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,   
    MatAutocompleteModule, 
    MatCheckboxModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatAutocompleteModule, 
    MatCheckboxModule,
],
  declarations: []
})
export class MaterialModule { }
