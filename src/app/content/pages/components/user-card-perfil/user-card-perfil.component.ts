import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { ApiService } from 'src/app/services/api.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-user-card-perfil',
  templateUrl: './user-card-perfil.component.html',
  styleUrls: ['./user-card-perfil.component.scss'],
})
export class UserCardPerfilComponent implements OnInit {
  @Input()
  user: User | null = null;

  loading: boolean = false;
  loadingMsg: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  navigateToList() {
    this.router.navigate(['/list']);
  }
  userDelete() {
    this.loading = true;
    this.loadingMsg = 'Criando Usuário...';

    if (this.user?.id)
      this.apiService.deleteUser(this.user.id).subscribe(
        (result: any) => {
          this.showMessage('Usuário Deletado com sucesso');
          this.loading = false;
          this.navigateToList();
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
  showMessage(msg: string) {
    this.snackBarService.openSnackBar(msg, 'FECHAR');
  }
}
