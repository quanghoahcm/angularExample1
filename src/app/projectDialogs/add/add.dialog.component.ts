import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.dialog.component.html',
  styleUrls: ['./add.dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceProject: ProjectService
  ) { }
  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
  onSave() {
    this.serviceProject.add2(this.data).subscribe(
      result => {
        console.log("successful")
      }
    );
    const result = {} as Project;
    result.name = this.data.projectName;
    result.imageUrl = this.data.imageUrl;  
    this.dialogRef.close(result);
  }
}
