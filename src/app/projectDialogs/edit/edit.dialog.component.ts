import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.dialog.component.html',
  styleUrls: ['./edit.dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close(false);
  }
  onSave() {
    this.projectService.update2(this.data).subscribe(result => {
      console.log("update successful" + result);
    }
    );
    const result = {
      name: this.data.name,
      imageUrl: this.data.imageUrl
    };
    this.dialogRef.close(result);
  }

}
