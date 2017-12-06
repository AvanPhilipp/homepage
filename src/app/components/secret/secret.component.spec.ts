import { SecretService } from './secret.service';
import { SecretComponent } from './secret.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SecretComponent', () => {
  let component: SecretComponent;
  let fixture: ComponentFixture<SecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SecretComponent
      ],
      providers: [
        SecretService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
