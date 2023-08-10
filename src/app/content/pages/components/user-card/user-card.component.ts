import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { ApiService } from 'src/app/services/api.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input()
  user: User | null = null;

  @Input()
  showButtons: boolean = true;

  loading: boolean = false;
  loadingMsg: string = '';

  defaultUserPicture: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHlZl1MOLw2JluEM12aTJmxVg2vHBS0ICvQ&usqp=CAU';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {}
  // Implemente outros métodos CRUD conforme necessário
  navigateToUpdateUser(userId: string | undefined) {
    if (userId) this.router.navigate(['/update', userId]);
  }
  userDelete() {
    this.loading = true;
    this.loadingMsg = 'Criando Usuário...';

    if (this.user?.id)
      this.apiService.deleteUser(this.user.id).subscribe(
        (result: any) => {
          if (this.user) {
            this.user.active = false;
            this.showMessage('Usuário Deletado com sucesso');
            this.loading = false;
          }
        },
        (erro) => {
          let er = '';
          for (const key in erro.error.data) {
            if (erro.error.data.hasOwnProperty(key)) {
              er += `${key}: ${erro.error.data[key]} \n`;
            }
          }
          this.showMessage(er);
          this.loading = false;
        }
      );
  }
  navigateToUser() {
    // if(user)
    this.router.navigate(['/users', this?.user?.id]);
  }
  showMessage(msg: string) {
    this.snackBarService.openSnackBar(msg, 'FECHAR');
  }
}
