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
    this.appendItems(0, this.sum);
  }
  msg = "Enter category name:";
  ngOnInit() {
    this.createCategoryForm();

  }

  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;  
  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' '].join(''));
    }
  }
  
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    console.log(this.array)
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