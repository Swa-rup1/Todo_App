import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { NewuserComponent } from './app/newuser/newuser.component';
import { ListofuserComponent } from './app/listofuser/listofuser.component';

import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: 'new-user', component: NewuserComponent },
        { path: 'list-of-users', component: ListofuserComponent },

        { path: '', redirectTo: '/new-user', pathMatch: 'full' },
      ],
      withComponentInputBinding()
    ),
    provideHttpClient(),
  ],
});
