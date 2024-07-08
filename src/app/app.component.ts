import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardUserComponent } from './card-user/card-user.component';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CardUserComponent,
    FormUserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Form2Angular';
}
