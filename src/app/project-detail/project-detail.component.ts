import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { error } from 'protractor';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  public projectId;
  constructor(
    private _projectService : ProjectService,
    private route: ActivatedRoute
  ) { 
 
  }
  project : Project;
  public errorMsg;
  ngOnInit() {
      // let id = parseInt(this.route.snapshot.paramMap.get('id'));
      // this.projectId = id;
      this.route.paramMap.subscribe((params:ParamMap) =>{
        let myId = parseInt(params.get('id'))
        this.projectId = myId;

        this._projectService.getProjectById(this.projectId).subscribe(project =>{
              this.project = project
              console.log(this.project)
        },
        error => this.errorMsg = error
      );
      }
    )

  }

}
