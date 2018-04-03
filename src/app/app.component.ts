import { Component } from '@angular/core';
import { ProjectService } from './services/project.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditDialogComponent } from './projectDialogs/edit/edit.dialog.component';
import { AddDialogComponent } from './projectDialogs/add/add.dialog.component';
import { DeleteDialogComponent } from './projectDialogs/delete/delete.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  ngOnInit() {
   return;
  }
  

}
