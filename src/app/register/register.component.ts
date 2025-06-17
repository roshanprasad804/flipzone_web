import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    // age: ['', [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle registration logic here
      console.log(this.registerForm.value);
    }
  }
}
