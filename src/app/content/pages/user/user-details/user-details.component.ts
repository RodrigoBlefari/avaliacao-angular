import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  title = 'Detalhes do Usuário';
  user: User | null = null;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

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
