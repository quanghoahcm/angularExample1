import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  private basePath = '/categories';
  categoriesRef: AngularFireList<Category>;
  constructor(
    private db: AngularFireDatabase,
  ) {
    this.categoriesRef = db.list('/categories');
  }
  // return an observable list of Category
  getCategoryList(): Observable<any[]> {
    return this.categoriesRef.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }
  createCategory(category: Category){
    this.categoriesRef.push(category);
  }

}
