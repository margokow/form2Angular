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

    @Input() infos!: any[];
    @Input() info!: FormGroup;
    @Input() submitted!: boolean;

    @Output() addUser: EventEmitter<any> = new EventEmitter<any>();
    @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

    onSubmit() {
      this.addUser.emit();
    }

    onDelete(index: number) {
      this.deleteUser.emit(index);
    }
  }

