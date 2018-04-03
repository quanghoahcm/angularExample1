import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-delete.dialog',
  templateUrl: './delete.dialog.component.html',
  styleUrls: ['./delete.dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor( 
    private dialogRef :MatDialogRef<DeleteDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any,private serviceProject: ProjectService
  ) { }

  ngOnInit() {
  }
  onDelete(){
    this.serviceProject.delete2(this.data).subscribe();   
    this.dialogRef.close(true);
  }
  onClose(){
    this.dialogRef.close(false);
  }
}
