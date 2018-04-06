import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [

  {
    path: 'projects', component: ProjectComponent
  },
  {
    path:'chat',component:ChatComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'category', component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
