import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandSecretComponent } from './grand-secret.component';

describe('GrandSecretComponent', () => {
  let component: GrandSecretComponent;
  let fixture: ComponentFixture<GrandSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
