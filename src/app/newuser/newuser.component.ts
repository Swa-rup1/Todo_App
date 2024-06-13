import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
})
export class NewuserComponent {
  TodoForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.TodoForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      Designation: [''],
      Email: [''],
      Address: [''],
      Phone: [''],
    });
  }

  onSubmit(): void {
    if (this.TodoForm.valid) {
      this.userService.addUser(this.TodoForm.value).subscribe(() => {
        alert('User added successfully');
        console.log('User added successfully');
        console.log(this.TodoForm.value);
        this.TodoForm.reset();
      });
    }
  }
}
