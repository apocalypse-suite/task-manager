import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskViewComponent} from './pages/task-view/task-view.component';
import {NewFolderComponent} from './pages/new-folder/new-folder.component';
import {NewTaskComponent} from './pages/new-task/new-task.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/lists', pathMatch: 'full'},
  {path: 'new-folder', component: NewFolderComponent},
  {path: 'lists', component: TaskViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'lists/:listId', component: TaskViewComponent},
  {path: 'lists/:listId/new-task', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
