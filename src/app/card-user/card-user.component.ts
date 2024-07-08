import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css'
})
export class CardUserComponent {

  info: FormGroup = this.formBuilder.group({
    nom: [''],
    prenom: ['']

  });

  @Input()
  infos!: any[];

  @Output()
  addUser: EventEmitter<any> = new EventEmitter<any>();

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.submitted = true;
    if (this.info.invalid) {
      return;
    }
    this.addUser.emit(this.info.value);
    this.info.reset();
    this.submitted = false;
  }

  get form() {
    return this.info.controls;
  }

  onDelete(index: number) {
    this.infos.splice(index, 1);
  }
}
