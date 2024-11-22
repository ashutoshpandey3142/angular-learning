import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cash-kick-form',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './cash-kick-form.component.html',
  styleUrl: './cash-kick-form.component.css',
})
export class CashKickFormComponent implements OnInit {
  cashKickForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cashKickForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.cashKickForm.valid) {
      console.log('Form Submitted', this.cashKickForm.value);
    }
  }

  onCancel(): void {
    console.log('Form Cancelled');
  }

  onClose(): void {
    console.log('Form Closed');
  }
}
