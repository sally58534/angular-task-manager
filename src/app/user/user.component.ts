import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type User } from './users.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // signals inputs
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
