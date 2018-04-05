
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { CategoryService } from '../services/category.service';
import { MaterialModule } from './material.module';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      //  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
         AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
    declarations: [

    ],
    providers: [
        
    ]

})
export class CategoryModule { }