import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { UserCardComponent } from './content/pages/components/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserCardCreateComponent } from './content/pages/components/user-card-create/user-card-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserListComponent } from './content/pages/user/user-list/user-list.component';
import { UserDetailsComponent } from './content/pages/user/user-details/user-details.component';
import { CreateUserComponent } from './content/pages/user/create-user/create-user.component';
import { UpdateUserComponent } from './content/pages/user/update-user/update-user.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './content/pages/components/menu/menu.component';
import { HeaderUserComponent } from './content/pages/components/header-user/header-user.component';
import { UserCardPerfilComponent } from './content/pages/components/user-card-perfil/user-card-perfil.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingOverlayComponent } from './content/pages/components/loading-overlay/loading-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserCardCreateComponent,
    UserListComponent,
    UserDetailsComponent,
    CreateUserComponent,
    UpdateUserComponent,
    MenuComponent,
    HeaderUserComponent,
    UserCardPerfilComponent,
    LoadingOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
