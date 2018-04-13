import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatDialogRef, MatDialog, PageEvent } from '@angular/material';
import { EditDialogComponent } from '../projectDialogs/edit/edit.dialog.component';
import { AddDialogComponent } from '../projectDialogs/add/add.dialog.component';
import { DeleteDialogComponent } from '../projectDialogs/delete/delete.dialog.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  /* Paging */
  displayedColumns = ['id', 'name', 'imageUrl', 'actions'];
  index: number;
  page: number;
  length = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  message = '';
  projectCtrl: FormControl;
  filteredProject: Observable<Project[]>;
  Projects: Project[] = [];
  title = 'Projects Manager';
  projectsList: Project[] = [];
  project: Project;
  submitted: boolean = false;
  stringSearch: string;
  public errorMsg;
  constructor(
    private serviveProject: ProjectService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.projectCtrl = new FormControl();
    this.filteredProject = this.projectCtrl.valueChanges.debounceTime(400)
    .pipe(
      startWith(''),
      map(project => {
        this.serviveProject.getProjects2().
        subscribe(projects => {
        this.Projects = projects.recordset
        });
        const x = project ? this.filterProjects(project) : this.Projects.slice();
       return x;
      })
    );
  }
  ngOnInit() {
    this.getProjectsPaging(0, this.pageSize);
  }
  onSelect(project){
    this.router.navigate(['/projects-detail',project.id])
  }
  getProjectsPaging(page: number, pageSize: number) {
    page = page ? page : 0;
    pageSize = pageSize ? pageSize : 10;  
    this.serviveProject.getProjectsPaging2(page, pageSize).
      subscribe(projectsList => {
        console.log(projectsList);
        this.projectsList = projectsList.recordset;
        this.length = projectsList.totalElements;    
      },
      error=> this.errorMsg = error +" -- Server error. --"     
    );
  
  }
  onEnter(event) {
    this.message = event.target.value;
    return this.serviveProject.search2(event.target.value).
      subscribe(projectList => {
        this.projectsList = projectList.recordset;
      })
  }
  deleteAll(){
    console.log('list project checked')
  }
  Search(stringSearch: string) {
    this.message = stringSearch;
    console.log(stringSearch)
    return this.serviveProject.search2(stringSearch).
      subscribe(projectList => {
        this.projectsList = projectList.recordset;
      })
  }
  filterProjects(name: string) {
    return this.Projects.filter(project =>
      project.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  getProjectList() {
    this.serviveProject.getProjects2().
      subscribe(projectsList => {
        console.log(projectsList);
        this.projectsList = projectsList;
      });
  }

  onPagingChange(event?: PageEvent) {

    this.serviveProject.getProjectsPaging2(event.pageIndex, event.pageSize).
      subscribe(projectsList => {
        this.page = event.pageIndex;
        this.pageSize = event.pageSize;
        console.log(projectsList);
        this.projectsList = projectsList.recordset
      });



  }

  Create(item: Project) {
    // var newId = this.projectsList.length + 1;

    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {
        action: "create",
        id: null,
        projectName: null,
        imageUrl: './assets/images/image1.jpg'
      },
      width: '600px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProjectsPaging(this.page, this.pageSize);
      const newItem = {} as Project;
      newItem.imageUrl = result.imageUrl;
      newItem.name = result.name;
      this.projectsList.push(newItem);
    })
  }
  edit(item: Project) {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        action: "edit",
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl
      },
      width: '600px',
      height: '500px'
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result != false) {
        this.getProjectsPaging(this.page, this.pageSize);
        const findItem = this.projectsList.find(it => it.id === item.id);
        findItem.imageUrl = result.imageUrl;
        findItem.name = result.name;
      }
    })
  }

  delete(item) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        action: "delete",
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl
      },
      width: '600px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
      this.getProjectsPaging(this.page,this.pageSize);
        // this.projectsList = this.projectsList.filter(x => {
        //   return x !== item;
        // })
    }
    );
  }

}
