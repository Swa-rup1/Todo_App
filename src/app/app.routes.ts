import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListofuserComponent } from './listofuser/listofuser.component';

import { NewuserComponent } from './newuser/newuser.component';
import { EdituserComponent } from './edituser/edituser.component';

export const routes: Routes = [
  { path: 'new-user', component: NewuserComponent },
  { path: 'list-of-users', component: ListofuserComponent },
  { path: 'edit-user', component: EdituserComponent },
  { path: '', redirectTo: '/new-user', pathMatch: 'full' },
];
