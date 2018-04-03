import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


 interface IPos {
  
    x: number,
    y: number
  
 }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform: FormGroup;
  firstName: FormControl;
  source: Observable<IPos>;
  circle = document.getElementById("circle");
  constructor(){
    
  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.doIt();
  }
  onSubmit(){
    
  }
  onCancel(){
    this.myform.reset();
  }


  doIt(){
    this.source = Observable.fromEvent(document,"mousemove")
    .map((e:MouseEvent) => {      
      return{
        x:e.clientX,
        y: e.clientY
      }
    })
   .filter(value => value.x <500)
   .delay(300);  
    this.source.subscribe(     
      e=> console.log(e),
           
    );
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
      }),
    });
  }
}