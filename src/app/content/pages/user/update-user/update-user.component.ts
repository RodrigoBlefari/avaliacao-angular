import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
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
  title: string = 'Editar Usuário';

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Erro ao buscar usuários:', error);
      }
    );
  }
}
