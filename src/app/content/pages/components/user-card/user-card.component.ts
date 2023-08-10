import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

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

  defaultUserPicture: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHlZl1MOLw2JluEM12aTJmxVg2vHBS0ICvQ&usqp=CAU';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  // Implemente outros métodos CRUD conforme necessário
  navigateToUpdateUser(userId: string | undefined) {
    if (userId) this.router.navigate(['/update', userId]);
  }
}
