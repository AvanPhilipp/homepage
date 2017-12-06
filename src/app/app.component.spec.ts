// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { LoginComponent } from './components/login/login.component';
// import { SecretComponent } from './components/secret/secret.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';
// import { appRoutes } from './app.routes';
// import { FooterComponent } from './parts/footer/footer.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './parts/header/header.component';
// import { RouterModule } from '@angular/router';
// import { GrandSecretComponent } from './components/grand-secret/grand-secret.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // HeaderComponent,
        // FooterComponent,
        // WelcomeComponent,
        // SecretComponent,
        // GrandSecretComponent,
        // LoginComponent
      ],
      imports: [
        // AngularFontAwesomeModule,
        // RouterModule.forRoot(appRoutes)
      ],
      providers: [
        // {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  
  it('should have name', async(() => {
    expect(app.name).toEqual('Fealoce');
  }));
});
