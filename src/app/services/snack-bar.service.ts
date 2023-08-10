import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    action: string = 'Fechar',
    config?: MatSnackBarConfig
  ) {
    const defaultConfig: MatSnackBarConfig = {
      duration: 3000, // Duração em milissegundos
      horizontalPosition: 'center', // Posição horizontal
      verticalPosition: 'top', // Posição vertical
    };

    this.snackBar.open(message, action, { ...defaultConfig, ...config });
  }
}
