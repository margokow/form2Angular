import { Component } from '@angular/core';
import { CardUserComponent } from '../card-user/card-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule, CardUserComponent],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  infos: any[] = [];

  addUser(user: any) {
    this.infos.push(user);
  }

  onDeleteUser(index: number) {
    this.infos.splice(index, 1);
  }
}
