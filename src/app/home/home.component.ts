import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Category } from "../models/category.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category = new Category(1, "Tin Tuc")
  categoryform: FormGroup;
  private formSumitAttempt: boolean;
  constructor(
    private formBuilder: FormBuilder
  ) {
  }
  msg = "Enter category name:";
  ngOnInit() {
    this.createCategoryForm();

  }
  onSubmit() {
    console.log(this.categoryform.controls['name'].value);
    this.formSumitAttempt = true;
    if (this.categoryform.valid) {

      this.msg = this.categoryform.controls['name'].value /// Get value from Form Control    
      let newCategory = new Category(1, this.msg)   
      console.log(newCategory);  
    }
    else {

    }
  }
  ngSubmit() {

    console.log(this.category.name);
  }
  onCancel() {
    this.categoryform.reset();
    this.formSumitAttempt = false;
  }
  createCategoryForm() {
    this.categoryform = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }
}