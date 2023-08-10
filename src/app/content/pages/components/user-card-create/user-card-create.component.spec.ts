import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardCreateComponent } from './user-card-create.component';

describe('UserCardCreateComponent', () => {
  let component: UserCardCreateComponent;
  let fixture: ComponentFixture<UserCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
