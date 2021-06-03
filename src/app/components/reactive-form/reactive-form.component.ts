import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../models/User';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  users: User[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.users = [];
    this.reactiveForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(1)]],
      Age: [
        null,
        [Validators.required, Validators.min(2), Validators.max(121)],
      ],
      Email: ['', [Validators.required, Validators.email]],
    });
  }
  get name() {
    return this.reactiveForm.get('Name');
  }
  get age() {
    return this.reactiveForm.get('Age');
  }
  get email() {
    return this.reactiveForm.get('Email');
  }

  submitHandler() {
    this.users.push({
      name: this.reactiveForm.value.Name,
      age: `${this.reactiveForm.value.Age} years`,
      email: this.reactiveForm.value.Email,
    });
    this.reactiveForm.reset();
  }
}
