import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClienteFrmComponent } from './app-cliente-frm.component';

describe('AppClienteFrmComponent', () => {
  let component: AppClienteFrmComponent;
  let fixture: ComponentFixture<AppClienteFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppClienteFrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppClienteFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
