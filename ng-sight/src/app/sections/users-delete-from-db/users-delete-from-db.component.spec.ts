import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteFromDBComponent } from './users-delete-from-db.component';

describe('UsersDeleteFromDBComponent', () => {
  let component: UsersDeleteFromDBComponent;
  let fixture: ComponentFixture<UsersDeleteFromDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDeleteFromDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDeleteFromDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
