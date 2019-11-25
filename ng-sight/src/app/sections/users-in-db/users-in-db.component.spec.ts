import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInDBComponent } from './users-in-db.component';

describe('UsersInDBComponent', () => {
  let component: UsersInDBComponent;
  let fixture: ComponentFixture<UsersInDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
