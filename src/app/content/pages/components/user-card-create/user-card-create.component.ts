import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { ApiService } from 'src/app/services/api.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-user-card-create',
  templateUrl: './user-card-create.component.html',
  styleUrls: ['./user-card-create.component.scss'],
})
export class UserCardCreateComponent {
  title = 'Criar Usuário';
  @Input()
  type: 'create' | 'edit' = 'create';
  @Input() user: User = {
    title: '',
    firstName: '',
    lastName: '',
    picture: '',
    email: '',
  };
  titles = ['mr', 'mrs', 'ms', 'miss'];
  loading = false;
  loadingMsg = '';

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      picture: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  showMessage(msg: string) {
    this.snackBarService.openSnackBar(msg, 'FECHAR');
  }
  submitForm() {
    if (this.type === 'create') {
      if (this.userForm.valid) {
        this.loading = true;
        this.loadingMsg = 'Criando Usuário...';
        const formData = this.userForm.value;

        this.apiService.createUser(formData).subscribe(
          (usuarioCriado: User) => {
            this.showMessage('Usuário criado com sucesso');
            this.loading = false;
            if (usuarioCriado.id) this.navigateToUser(usuarioCriado.id);
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
    } else {
      this.loading = true;
      this.loadingMsg = 'Editando Usuário...';
      const formData = this.userForm.value;

      if (this.user.id)
        this.apiService.updateUser(this.user.id, formData).subscribe(
          (usuarioCriado: User) => {
            this.showMessage('Usuário editado com sucesso');
            this.loading = false;
            if (usuarioCriado.id) this.navigateToUser(usuarioCriado.id);
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
  }

  updateUserInCard(newUser: User) {
    this.user = newUser;
  }

  navigateToUser(userId: string) {
    this.router.navigate(['/users', userId]);
  }

  navigateToList() {
    this.router.navigate(['/list']);
  }
}
