import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [HttpService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  message: any;
  
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
  });

  constructor(private fb: FormBuilder, private httpService:HttpService) {}

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle registration logic here
      this.httpService.addUser(this.registerForm.value).subscribe((data:any) => {
        this.message = data;
      });

    }
  }
}
