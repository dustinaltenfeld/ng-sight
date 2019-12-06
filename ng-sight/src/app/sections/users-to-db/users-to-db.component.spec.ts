import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersToDBComponent } from './users-to-db.component';

describe('UsersToDBComponent', () => {
  let component: UsersToDBComponent;
  let fixture: ComponentFixture<UsersToDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersToDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersToDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
