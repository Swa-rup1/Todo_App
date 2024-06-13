import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';

import { ListofuserComponent } from './listofuser/listofuser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NewuserComponent,ListofuserComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
}
