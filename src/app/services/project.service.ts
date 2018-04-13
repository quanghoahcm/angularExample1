import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
  private readonly dataUrl = "assets/project-data.json";
  // private readonly dataUrl = "http://192.168.75.88:9998/musicstore/album/all";
  private readonly dataUrl3 = "http://192.168.75.88:9998/musicstore/album/page?";
  private readonly dataUrl31 = "http://192.168.75.88:9998/musicstore/album/search?";
  private readonly dataUrl2 = "http://localhost:3000/projects";
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) { }
  /* Get projects from server json data */

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl)
  }
  add(project: Project): Observable<Project> {
    return this.http.post<Project>(this.dataUrl, project);
  }
  update(project: Project): Observable<any> {
    return this.http.put(this.dataUrl, project);
  }
  delete(project: Project): Observable<any> {
    return this.http.delete(this.dataUrl);
  }

  /* Get from Nodejs Express */

  getProjects2(): Observable<any> {
    return this.http.get(this.dataUrl2)
           .catch(this.errorHandler);
  }
  getProjectsPaging2(page?: number, pageSize?: number): Observable<any> {
    return this.http.get(this.dataUrl2 + '?page=' + page + '&pagesize=' + pageSize)
              .catch(this.errorHandler);
  }
  // search2(stringSearch: string, page?: number, pageSize?: number): Observable<any> {
  //   return this.http.get(this.dataUrl2 + 'page=' + page + '&pagesize=' + pageSize + '&term=' + stringSearch);
  // }
  add2(project: Project): Observable<any> {
    console.log(project);
    console.log(this.dataUrl2 +'/add')    
    return this.http.put<Project>(this.dataUrl2 +'/add', project, this.httpOptions);
    
  }

  update2(project: Project): Observable<any> {
    console.log(this.dataUrl2 + '/' + project.id)
    console.log(project)
    return this.http.post(
      this.dataUrl2 + '/' + project.id,
      project,
      this.httpOptions
    );
   
  }
  delete2(project: Project): Observable<any> {
    return this.http.delete(this.dataUrl2 + '/delete/'+project.id, this.httpOptions);
  }

  search2(term:string):Observable<any>{
    return this.http.get(this.dataUrl2+'/search/'+term);
  }
   errorHandler(error : HttpErrorResponse){
     return Observable.throw(error.message|| "Server Error");
   }

  /* From Nghia Server */
  getProjectsPaging(page?: number, pageSize?: number): Observable<any> {
    return this.http.get(this.dataUrl3 + 'page=' + page + '&pagesize=' + pageSize);
  }
  search(stringSearch: string, page?: number, pageSize?: number): Observable<any> {
    return this.http.get(this.dataUrl31 + 'page=' + page + '&pagesize=' + pageSize + '&term=' + stringSearch);
  }
}
