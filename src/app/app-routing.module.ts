import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'projects', component: ProjectComponent
  },
  // {
  //     path:'projects/:id', component:ProjectDetailComponent
  // },
  {
    path:'project-detail/:id',component:ProjectDetailComponent
  },
  {
    path: 'chat', component: ChatComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
