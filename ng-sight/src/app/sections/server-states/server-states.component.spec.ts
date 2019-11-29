import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatesComponent } from './server-states.component';

describe('ServerStatesComponent', () => {
  let component: ServerStatesComponent;
  let fixture: ComponentFixture<ServerStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
