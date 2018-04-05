import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  categoriesRef: Observable<any[]>;
  value = '';
  constructor(
    private categoryService: CategoryService
    //db: AngularFirestore
   ) {
   // this.categoriesRef = db.collection('categories').valueChanges();
    this.categoriesRef = categoryService.getCategoryList();
   }
  ngOnInit() {
    
  }
  update(value:string){
    this.value = value;
  }

  // TODO: Refactor into text name category form component
  saveCategory(event: any, el: HTMLInputElement) {
    event.preventDefault();
    const category = new Category(1,this.value)
    if(this.value){
      this.categoryService.createCategory(category);
      this.value='';
    }   
  }

}
