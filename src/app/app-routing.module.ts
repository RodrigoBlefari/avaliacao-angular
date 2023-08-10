import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './content/pages/user/user-list/user-list.component';
import { UserDetailsComponent } from './content/pages/user/user-details/user-details.component';
import { CreateUserComponent } from './content/pages/user/create-user/create-user.component';
import { UpdateUserComponent } from './content/pages/user/update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
