import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from '../edituser/edituser.component';

@Component({
  selector: 'app-listofuser',
  standalone: true,
  imports: [CommonModule, RouterLink, EdituserComponent],
  templateUrl: './listofuser.component.html',
  styleUrl: './listofuser.component.css',
})
export class ListofuserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.userService);
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }
}
