import { Component } from '@angular/core';
import { CardUserComponent } from '../card-user/card-user.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule, CardUserComponent],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  infos: any[] = [];
  info: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.info = this.formBuilder.group({
      nom: [''],
      prenom: [''],
    });
  }

  addUser() {
    this.submitted = true;
    if (this.info.invalid) {
      return;
    }
    this.infos.push(this.info.value);
    this.info.reset();
    this.submitted = false;
  }

  deleteUser(index: number) {
    this.infos.splice(index, 1);
  }
}
