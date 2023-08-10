import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/user/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  @Input()
  user: User = {
    id: '',
    title: 'mr',
    firstName: 'Nome',
    lastName: 'Completo',
    picture: '',
    gender: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    location: {
      street: '',
      city: '',
      state: '',
      country: '',
      timezone: '',
    },
    registerDate: '',
    updatedDate: '',
  };
  title: string = 'Criar Usuário';
}
